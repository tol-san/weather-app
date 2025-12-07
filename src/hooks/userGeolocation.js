import { useEffect, useState } from "react"


const userGeolocation = () => {
  const [crd, setCrd] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCrd({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude
        });
      },
      (err) => setError(err.setError)
    );
  }, []);
  return {crd, err}
}

export default userGeolocation;