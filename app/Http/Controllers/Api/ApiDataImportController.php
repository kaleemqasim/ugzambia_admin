<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserDetails;
use App\Models\Warehouse;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Exception;
use Illuminate\Support\Facades\Artisan;
use App\Models\Role;
use App\Models\Translation;

class ApiDataImportController extends Controller
{
    /**
     * Display a listing of the resource.
     */

//     public function index(Request $request, $period_id)
//     {
//         $period_id = '202409';
// //        $response = Http::get('http://127.0.0.1:8001/api/data-import/'.$period_id);
//         $response = Http::get('https://api.ugzambia.net/api/data-import/'.$period_id);
//         $importData = $response->json()['data'];
//         $request->session()->forget('importData');
//         $request->session()->put('importData', $importData);
//         return response()->json([
//             'data' => $period_id,
//             'status' => 200,
//             'count' => count($importData),
//             'message' => 'Data stored in session successfully.'
//         ]);
//     }


        
    public function index(Request $request, $period_id)
    {
        // $period_id = '202409';
        $last_synced = Translation::where('key', 'last_employee_synced')->first();
        $apiUrl = 'https://ugzambia.net/server/index.php/Sys/current/' . $period_id;
        $response = Http::withHeaders([
            'Key' => 'ugas-system-mmarifat-112233'
        ])->patch($apiUrl);
    
        if ($response->successful()) {
            $importData = $response->json();

            if(count($importData)) {
                info('current month');
                $request->session()->forget('importData');
                $request->session()->put('importData', $importData);
                
                return response()->json([
                    'data' => $period_id,
                    'status' => 200,
                    'count' => count($importData),
                    'message' => 'Data stored in session successfully.'
                ]);
            } else {
                info('previous month');
                $periodDate = DateTime::createFromFormat('Ym', $period_id);
                $periodDate->modify('-1 month');
                $prevPeriodDate = $periodDate->format('Ym');
                if($last_synced && $prevPeriodDate != $last_synced->value) {
                    $apiUrl = 'https://ugzambia.net/server/index.php/Sys/current/' . $prevPeriodDate;
                    $response = Http::withHeaders([
                        'Key' => 'ugas-system-mmarifat-112233'
                    ])->patch($apiUrl);
                    if ($response->successful()) {
                        $importData = $response->json();
                        $request->session()->forget('importData');
                        $request->session()->put('importData', $importData);
                        
                        return response()->json([
                            'data' => $period_id,
                            'status' => 200,
                            'count' => count($importData),
                            'message' => 'Data stored in session successfully.'
                        ]);
                    }
                }
            }
        }
    
        return response()->json([
            'status' => $response->status(),
            'message' => 'Failed to fetch data from the API.'
        ], $response->status());
    }

    public function fetchEmployeesData() {

    }


    public function processImportedData(Request $request)
    {
        ini_set('max_execution_time', 5000);
        ini_set('memory_limit', '1024M');
        ini_set('max_input_time', 5000);
        $importData = $request->session()->get('importData', []);
        if (empty($importData)) {
            return response()->json([
                'success' => false,
                'message' => 'No data found in session.'
            ], 404);
        }

        $warehouseIds = Warehouse::pluck('id')->toArray();
        $importedUsers = []; // To keep track of imported or updated users

        try {
            // foreach ($importData as $nrcNo => $data) {
            //     // Find existing user based on name and phone
            //     $existingUser = User::where('name', $data['names'])
            //         ->where('nrc_no', $data['nrcNo'])
            //         ->first();

            //     if ($existingUser) {
            //         $isDuplicate = User::where('name', $data['names'])
            //             ->where('nrc_no', $data['nrcNo'])
            //             ->where('id', '!=', $existingUser->id)
            //             ->exists();

            //         if ($isDuplicate) {
            //             User::where('id', $existingUser->id)->delete();
            //             UserDetails::where('user_id', $existingUser->id)->delete();
            //         } else {
            //             $existingUser->update([
            //                 'period_id' => $data['periodName'],
            //                 'address' => $data['district'] . ',' . $data['province'],
            //                 'province' => $data['province'],
            //                 'district' => $data['district'],
            //                 'ministry' => $data['ministry'],
            //                 'employee_no' => $data['employeeNo'],
            //                 'man_no' => $data['manNo'],
            //                 'nrc_no' => $data['nrcNo'],
            //                 'import_at' => $data['importAt'],
            //                 'total' => $data['total']
            //             ]);

            //             $importedUsers[] = $existingUser;
            //             // Clear the session entry for this NRC number
            //             // unset($importData[$nrcNo]);
            //             continue;
            //         }
            //     }

            //     // Create new User record
            //     // dd($data);
            //     $newUser = new User();
            //     $newUser->period_id = $data['periodName'];
            //     $newUser->name = $data['names'];
            //     $newUser->phone = $data['nrcNo'];
            //     $newUser->address = $data['district'] . ',' . $data['province'];
            //     $newUser->province = $data['province'];
            //     $newUser->district = $data['district'];
            //     $newUser->ministry = $data['ministry'];
            //     $newUser->employee_no = $data['employeeNo'];
            //     $newUser->man_no = $data['manNo'];
            //     $newUser->nrc_no = $data['nrcNo'];
            //     $newUser->total = $data['total'];
            //     $newUser->import_at = $data['importAt'];
            //     $newUser->warehouse_id = 1; // Assuming default warehouse_id
            //     $newUser->company_id = 1; // Assuming default company_id
            //     $newUser->save();

            //     // Save details for each warehouse
            //     foreach ($warehouseIds as $warehouseId) {
            //         $userDetails = new UserDetails();
            //         $userDetails->warehouse_id = $warehouseId;
            //         $userDetails->user_id = $newUser->id;
            //         $userDetails->opening_balance = 0; // Example value, adjust as needed
            //         $userDetails->opening_balance_type = 'receive'; // Example type, adjust as needed
            //         $userDetails->save();
            //     }

            //     $importedUsers[] = $newUser;
            // }
            
            
            $usersData = [];
            $userDetailsData = [];
            $batchSize = 1000;
            $counter = 0;
            $now = now();
    
            $lastUser = User::orderBy('id', 'desc')->first();
            $lastId = $lastUser ? $lastUser->id + 1 : 1;
            
            foreach ($importData as $nrcNo => $data) {
                // Prepare user data for bulk insert
                $usersData[] = [
                    'id' => $lastId,
                    'period_id' => $data['periodName'],
                    'name' => $data['names'],
                    'phone' => $data['nrcNo'],
                    'address' => $data['district'] . ',' . $data['province'],
                    'province' => $data['province'],
                    'district' => $data['district'],
                    'ministry' => $data['ministry'],
                    'employee_no' => $data['employeeNo'],
                    'man_no' => $data['manNo'],
                    'nrc_no' => $data['nrcNo'],
                    'total' => $data['total'],
                    'import_at' => $data['importAt'],
                    'warehouse_id' => 1, // Default warehouse_id
                    'company_id' => 1, // Default company_id
                    'created_at' => $now,
                    'updated_at' => $now,
                ];
    
                // Prepare user details data for bulk insert
                foreach ($warehouseIds as $warehouseId) {
                    $userDetailsData[] = [
                        'warehouse_id' => $warehouseId,
                        'user_id' => $lastId,
                        'opening_balance' => 0, // Example value, adjust as needed
                        'opening_balance_type' => 'receive', // Example type, adjust as needed
                        'created_at' => $now,
                        'updated_at' => $now,
                    ];
                }
    
                // Increment last ID for the next user
                $lastId++;
                $counter++;
    
                // If we have reached the chunk size, insert the data
                if ($counter % $batchSize == 0) {
                    $this->insertUsersAndDetails($usersData, $userDetailsData);
                    $usersData = []; // Reset usersData after insert
                    $userDetailsData = []; // Reset userDetailsData after insert
                    $counter = 0; // Reset counter for the next batch
                }
            }
    
            if (!empty($usersData)) {
                $this->insertUsersAndDetails($usersData, $userDetailsData);
            }


            return response()->json([
                'data' => [],
                'status' => 200,
                'message' => 'Data processed successfully.'
            ]);
        } catch (\Exception $e) {
            Log::error('Data import error: ' . $e->getMessage() . ' Line: ' . $e->getLine());
            return response()->json([
                'success' => false,
                'message' => 'An error occurred during data import.'
            ], 500);
        }
    }

    private function insertUsersAndDetails(array $usersData, array $userDetailsData)
    {
        DB::table('users')->insert($usersData);
        DB::table('user_details')->insert($userDetailsData);
    }


//    public function index(Request $request, $period_id)
//    {
//        // Fetch data from the API
//        // $response = Http::get('https://api.ugzambia.net/api/data-import/'.$period_id);
//        $response = Http::get('http://127.0.0.1:8001/api/data-import/'.$period_id);
//        $importData = $response->json()['data'];
//
//        $warehouseIds = Warehouse::pluck('id')->toArray();
//
//        try {
//            $importedUsers = []; // To keep track of imported or updated users
//
//            foreach ($importData as $data) {
//                // Find existing user based on name and phone
//                $existingUser = User::where('name', $data['names'])
//                    ->where('phone', $data['nrcNo'])
//                    ->first();
//
//                if ($existingUser) {
//                    // Check if the existing record is a duplicate (based on additional criteria if necessary)
//                    $isDuplicate = User::where('name', $data['names'])
//                        ->where('phone', $data['nrcNo'])
//                        ->where('id', '!=', $existingUser->id) // Check for other records with the same name and phone
//                        ->exists();
//
//                    if ($isDuplicate) {
//                        // Delete the existing user and their details if a duplicate is found
//                        User::where('id', $existingUser->id)->delete();
//                        UserDetails::where('user_id', $existingUser->id)->delete();
//                    } else {
//                        // Update existing user record if it is not a duplicate
//                        $existingUser->update([
//                            'period_id' => $data['periodName'],
//                            'address' => $data['district'] . ',' . $data['province'],
//                            'province' => $data['province'],
//                            'district' => $data['district'],
//                            'ministry' => $data['ministry'],
//                            'employee_no' => $data['employeeNo'],
//                            'man_no' => $data['manNo'],
//                            'nrc_no' => $data['nrcNo'],
//                            'import_at' => $data['importAt']
//                        ]);
//
//                        // Skip creating new user details for an updated user
//                        $importedUsers[] = $existingUser;
//                        continue;
//                    }
//                }
//
//                // Create new User record
//                $newUser = new User();
//                $newUser->period_id = $data['periodName'];
//                $newUser->name = $data['names'];
//                $newUser->phone = $data['nrcNo'];
//                $newUser->address = $data['district'] . ',' . $data['province'];
//
//                $newUser->province = $data['province'];
//                $newUser->district = $data['district'];
//                $newUser->ministry = $data['ministry'];
//                $newUser->employee_no = $data['employeeNo'];
//                $newUser->man_no = $data['manNo'];
//                $newUser->nrc_no = $data['nrcNo'];
//                $newUser->import_at = $data['importAt'];
//
//                $newUser->warehouse_id = 1; // Assuming default warehouse_id
//                $newUser->company_id = 1; // Assuming default company_id
//                $newUser->save();
//
//                // Save details for each warehouse
//                foreach ($warehouseIds as $warehouseId) {
//                    $userDetails = new UserDetails();
//                    $userDetails->warehouse_id = $warehouseId;
//                    $userDetails->user_id = $newUser->id;
//                    $userDetails->opening_balance = 0; // Example value, adjust as needed
//                    $userDetails->opening_balance_type = 'receive'; // Example type, adjust as needed
//                    $userDetails->save();
//                }
//
//                // Add the newly imported user to the list
//                $importedUsers[] = $newUser;
//            }
//
//            return response()->json([
//                'data' => $importedUsers,
//                'status' => 200,
//                'message' => 'Data imported and updated successfully.'
//            ]);
//        } catch (\Exception $e) {
//            Log::error('Data import error: ' . $e->getMessage() . ' Line: ' . $e->getLine());
//            return response()->json([
//                'success' => false,
//                'message' => 'An error occurred during data import.'
//            ], 500);
//        }
//    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function totalMember()
    {
        $response['data']=User::where('user_type', 'customers')->count();
        return response()->json(['data' => $response,'status' => 200, 'message' => 'Data pull successfully.']);
    }

    public function duplicateDataRemove()
    {
        try {
            $duplicateUserIds = User::select('id')
                ->selectRaw('MAX(id) as max_id')
                ->from(DB::raw('(SELECT id, name, phone FROM users) as u'))
                ->groupBy('name', 'phone')
                ->havingRaw('COUNT(*) > 1')
                ->pluck('max_id');

            if ($duplicateUserIds->isEmpty()) {
                return response()->json(['message' => 'No duplicate users found.']);
            }
            UserDetails::whereIn('user_id', $duplicateUserIds)->delete();
            User::whereIn('id', $duplicateUserIds)->delete();
            return response()->json(['message' => 'Duplicate users removed successfully.']);
        } catch (Exception $e) {
            Log::error('Error removing duplicate users: ' . $e->getMessage());
            return response()->json(['message' => 'An error occurred while removing duplicate users.', 'error' => $e->getMessage()], 500);
        }
    }




    public function memberChecking()
    {
        $phones = User::pluck('phone');

        return response()->json([
            'data' => $phones,
            'status' => 200,
            'message' => 'Data pull successfully.'
        ]);
    }

}
