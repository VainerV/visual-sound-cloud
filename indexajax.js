const NAPSTER_BASE_URL = "https://api.napster.com/v2.2/";
const NAPSTER_QUERY= {
      apikey: "MmRiMTFlMmMtMWI4Yy00YjdiLWFiN2MtNDI4Y2UxMjllMDUx",
      
    }

    function getDataFromApi(searchTerm, callback) {
        const query = {
          q: searchTerm,
          key: NAPSTER_QUERY,
        }
        $.getJSON(NAPSTER_BASE_URL, query, callback)
        .fail(showErr);
      }