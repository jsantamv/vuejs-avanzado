const dato = function() {


    var csv = { "Sheet1": [["BacId", "Name", "Address", "Legal_Id", "TerminalId"], [10151139, "SERVICENTRO G24", "FTE DISTRITO 4,BO GUACHIPELIN,SAN RAFAEL,ESCAZU,SAN JOSE", 3101641580, "BACF0006"], [10151139, "SERVICENTRO G24", "FTE DISTRITO 4,BO GUACHIPELIN,SAN RAFAEL,ESCAZU,SAN JOSE", 3101641580, "BACF0002"]] }
    
    var st = new ServiceStation()
    console.log(st.mapServiceStation(csv))

}

