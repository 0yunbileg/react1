export const USERS_DB = [
    { id: 'u1', name: 'Alice', email: 'alice@example.com' },
    { id: 'u2', name: 'Bob', email: 'bob@example.com' }
];

export async function GET() {
    return Response.json(USERS_DB);
}
