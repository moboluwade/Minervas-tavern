export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("query")
  console.log("i'm hit at ", query)
  if (!query) {
    return new Response('Query parameter is missing', { status: 400 });
  }


  try {
    const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`, {
      headers: {
        'Content-Type': 'application/json',
        "User-Agent": "minerva (folarinboluwade@gmail.com)"
      },
    });



    if (!res.ok) {
      throw new Error('Error fetching data from OpenLibrary');
    }
    const data = await res.json();
    return new Response(JSON.stringify({ data }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      // Log the error for debugging purposes
      console.error('Error:', error);

      // Return an appropriate error response
      return new Response(`Error: ${error.message}`, { status: 500 });
    } else {
      // Handle unexpected errors
      console.error('An unexpected error occurred:', error);

      // Return a generic error response
      return new Response('An unexpected error occurred', { status: 500 });
    }
  }
}