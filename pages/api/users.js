export default async function handler(req, res) {
    const respond = await fetch('https://randomuser.me/api/?results=10');
    const data = await respond.json();
    console.log (data,"data nè")
    res.status(200).json({ data: data })
}