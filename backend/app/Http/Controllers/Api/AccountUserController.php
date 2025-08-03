<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AccountUser;

class AccountUserController extends Controller
{
   public function store(Request $request)
        {
            try {
                $validated = $request->validate([
                    'account_name' => 'required|string',
                    'unique_identifier_code' => 'required|string|unique:account_users',
                    'authorization_level' => 'required|in:Administrative,Multi-Account,Single Account',
                    'active' => 'required|boolean',
                    'description' => 'nullable|string',
                ]);

                $user = AccountUser::create($validated);

                return response()->json([
                    'message' => 'Account user created successfully.',
                    'data' => $user
                ], 201);
            } catch (\Exception $e) {
                return response()->json(['error' => $e->getMessage()], 500);
            }
        }

    public function index()
    {
        return response()->json(AccountUser::all());
    }

    public function show($id)
    {
        $account = AccountUser::find($id);

        if (!$account) {
            return response()->json(['message' => 'Account not found'], 404);
        }

        return response()->json($account);
    }
}



