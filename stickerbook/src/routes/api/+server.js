import { supabase } from "../../helpers/supabase";

export async function GET() {
    try {
        const {data, error} = await supabase
        .from('stickers')
        .select('*');

        return new Response(JSON.stringify({stickers: data}), {
            headers: { 'Content-Type': 'application/json'},
        });
    } catch (error) {
        console.error('Error fetching stickers:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            headers: { 'Content-Type': 'application/json' },
        });
    }
}