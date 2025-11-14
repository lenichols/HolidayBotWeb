import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) { 

    // Get Form Data
    const secretSantaData = await request.formData();

    console.log("\n\nServerSide Logging:\n\n")
    console.log(secretSantaData)

    // Call FlaskAPI
    // try {
      const pythonBackendUrl = 'http://localhost:5000/api/generate'; // Replace with your Python backend URL
      const response = await fetch(pythonBackendUrl, {
        method: 'POST',
        body: secretSantaData, 
      });

      if (!response.ok) {
        throw new Error(`Python backend error: ${response.statusText}`);
      }

      const data = await response.json();
      return NextResponse.json({ data }, { status: 200 })

    // } catch (error) {
    //     console.error('Error fetching Match pairs from Python API: ', error);
    //     return NextResponse.json(
    //         { error: 'Failed to fetch Match pairs from Python API' },
    //         { status: 500 }
    //     );
    // }

    // Return Generation Result to Frontend
    
}