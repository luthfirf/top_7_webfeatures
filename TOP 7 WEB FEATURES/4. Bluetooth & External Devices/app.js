const button = document.getElementById('ble');
button.addEventListener('click', (event) => connectBluetooth());

async function connectBluetooth() {

    // Connect Device
    const device = await navigator.bluetooth.requestDevice({ filters: [{ services: ['heart_rate'] }] });
    const server = await device.gatt.connect();

    // Get heart rate data
    const hr = await server.getPrimaryService('heart_rate');
    const hrMeasurement = await hr.getCharacteristic('heart_rate_measurement');

    // Listen to changes on device
    await hrMeasurement.startNotifications();

    hrMeasurement.addEventListener('characteristicvaluechanged', (e) => {
        console.log(parseHeartRate(e.target.value));
    });

}