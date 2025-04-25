import { useState, useEffect } from "react"

import Landing from "../landing/Landing"

function QRLanding() {
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    // This will update the key to force reload when QRLanding is mounted
    setReloadKey(prev => prev + 1);
  }, []);

  return (
    <>
      <Landing key={reloadKey} />
    </>
  )
}

export default QRLanding