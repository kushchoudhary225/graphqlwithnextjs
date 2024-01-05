export async function GET(req, res) {
    try {
        // Your asynchronous operations here
        res.send("hii");
    } catch (error) {
        res.send(error.message);
    }
}
