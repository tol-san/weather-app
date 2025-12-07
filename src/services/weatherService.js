const API_KEY = '3688e438ae9f6f6124835aff7c2ae7b4';

export async function getWByCrd(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Weather fetch failed");
    return res.json();
}
export async function getWByCity(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");
    return res.json();
}