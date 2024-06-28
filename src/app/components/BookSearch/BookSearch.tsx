
import SearchBar from "./SearchBar";

type HandleSearch = (query: string) => Promise<void>

const BookSearch = () => {

    const handleSearch: HandleSearch = async (query: string) => {
         "use server"
        try {
            const res = await fetch(`https://openlibrary.org/search.json?q=${query}`, {
                headers: {
                    'Content-Type': 'application/json',
                    "User-Agent": "minerva (folarinboluwade@gmail.com)"
                },
            });

            if (!res.ok) {
                throw new Error('Error fetching data from OpenLibrary');
            }

            const data = await res.json();
            const top = data.docs.slice(0, 3)
            console.log(top);
            console.log('numbers found were: '+data.num_found)
            return top;

        } catch (error: any) {
            console.error('Error:', error.message);
            const errorCode = { error: `Error: ${error.message}` };
            return errorCode;
        }



    };

    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 justify-center items-center">
            <SearchBar handleSearch={handleSearch} />
        </div>
    );
}

export default BookSearch