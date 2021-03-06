async function createInlineSession(xr) {
    try {
      session = await xr.requestSession("inline", {
        optionalFeatures: [ "local" ]
      });
      return session;
    } catch(error) {
      throw error;
    }
  }

  export default createInlineSession