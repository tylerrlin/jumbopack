export async function GET(
    request: Request,
    {
        params,
    }: { params: Promise<{ dhall: string; type: string; datetime: string }> }
) {
    const { dhall, type, datetime } = await params;
    //  "2025-02-17T14:30:00Z"
    const date = new Date(datetime);
    //     assert(date.toISOString() == datetime);
    const year = date.getFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = date.getDate();

    console.log(year, month, day);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    const res = await fetch(
        `https://tufts.api.nutrislice.com/menu/api/weeks/school/${dhall}/menu-type/${type}/${year}/${month}/${day}/`
    );

    const body = await res.json();
    //     console.log(body);

    //     console.log(res.body);

    return Response.json(body);
}
