
class ServiceStation {
    constructor(bacId, name, address, legalId, terminalId) {
        this.bacId = bacId;
        this.name = name;
        this.address = address;
        this.legalId = legalId;
        this.terminalId = terminalId;
    }

    mapServiceStation(csv) {
        var rows = csv.Sheet1;
        rows.shift();
        var serviceStations = rows.map(
            r => new ServiceStation(r[0], r[1], r[2], r[3], r[4])
        );        
        return serviceStations
    }
}