const { deviceAddCustomCluster, temperature, humidity, numeric } = require('zigbee-herdsman-converters/lib/modernExtend');
const Zcl = require('zigbee-herdsman').Zcl;
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const e = exposes.presets;

function pm1() {
    return numeric({
        name: 'PM1',
        cluster: 'pm1',
        attribute: { ID: 'measuredValue', type: Zcl.DataType.UINT16 },
        valueMin: 0,
        valueMax: 1000,
		unit: 'µg/m³',
        reporting: { min: '10_SECONDS', max: '1_HOUR', change: 1 },
        description: 'Measured PM1 concentration',
        scale: 100,
        access: 'STATE_GET',
        entityCategory: 'diagnostic'
    });
}

function pm25() {
    return numeric({
        name: 'PM2.5',
        cluster: 'pm25',
        attribute: { ID: 'measuredValue', type: Zcl.DataType.UINT16 },
        valueMin: 0,
        valueMax: 1000,
		unit: 'µg/m³',
        reporting: { min: '10_SECONDS', max: '1_HOUR', change: 1 },
        description: 'Measured PM2.5 concentration',
        scale: 100,
        access: 'STATE_GET',
        entityCategory: 'diagnostic'
    });
}

function pm4() {
    return numeric({
        name: 'PM4',
        cluster: 'pm4',
        attribute: { ID: 'measuredValue', type: Zcl.DataType.UINT16 },
        valueMin: 0,
        valueMax: 1000,
		unit: 'µg/m³',
        reporting: { min: '10_SECONDS', max: '1_HOUR', change: 1 },
        description: 'Measured PM4 concentration',
        scale: 100,
        access: 'STATE_GET',
        entityCategory: 'diagnostic'
    });
}

function pm10() {
    return numeric({
        name: 'PM10',
        cluster: 'pm10',
        attribute: { ID: 'measuredValue', type: Zcl.DataType.UINT16 },
        valueMin: 0,
        valueMax: 1000,
		unit: 'µg/m³',
        reporting: { min: '10_SECONDS', max: '1_HOUR', change: 1 },
        description: 'Measured PM10 concentration',
        scale: 100,
        access: 'STATE_GET',
        entityCategory: 'diagnostic',
    });
}

function voc() {
    return numeric({
        name: 'VOC',
        cluster: 'voc',
        attribute: { ID: 'measuredValue', type: Zcl.DataType.UINT16 },
        valueMin: 0,
        valueMax: 1000,
		//unit: 'µg/m³',
        reporting: { min: '10_SECONDS', max: '1_HOUR', change: 1 },
        description: 'Measured VOC concentration',
        scale: 100,
        access: 'STATE_GET',
        entityCategory: 'diagnostic',
    });
}

function nox() {
    return numeric({
        name: 'NOX',
        cluster: 'nox',
        attribute: { ID: 'measuredValue', type: Zcl.DataType.UINT16 },
        valueMin: 0,
        valueMax: 1000,
		//unit: 'µg/m³',
        reporting: { min: '10_SECONDS', max: '1_HOUR', change: 1 },
        description: 'Measured NOX concentration',
        scale: 100,
        access: 'STATE_GET',
        entityCategory: 'diagnostic',
    });
}

const definition = {
    zigbeeModel: ['esphome-sen55'],
    model: 'esphome-sen55',
    vendor: 'esphome',
    description: 'ESPHome-based SEN55 air sensor with custom clusters',
    endpoint: (device) => ({
        general: 1,
        pm1: 2,
        pm25: 3,
		pm4: 4,
		pm10: 5,
		voc: 6,
		nox: 7,
    }),
    extend: [
        deviceAddCustomCluster('pm1', {
			ID: 0xFC2C,
			attributes: {
				measuredValue: { ID: 0x0000, type: Zcl.DataType.UINT16 },
        },
        commands: {},
        commandsResponse: {},
		}),
		deviceAddCustomCluster('pm25', {
			ID: 0xFC2D,
			attributes: {
				measuredValue: { ID: 0x0000, type: Zcl.DataType.UINT16 },
			},
			commands: {},
			commandsResponse: {},
		}),
		deviceAddCustomCluster('pm4', {
			ID: 0xFC2E,
			attributes: {
				measuredValue: { ID: 0x0000, type: Zcl.DataType.UINT16 },
			},
			commands: {},
			commandsResponse: {},
		}),
			deviceAddCustomCluster('pm10', {
			ID: 0xFC2F,
			attributes: {
				measuredValue: { ID: 0x0000, type: Zcl.DataType.UINT16 },
			},
			commands: {},
			commandsResponse: {},
		}),
			deviceAddCustomCluster('voc', {
			ID: 0xFC30,
			attributes: {
				measuredValue: { ID: 0x0000, type: Zcl.DataType.UINT16 },
			},
			commands: {},
			commandsResponse: {},
		}),
			deviceAddCustomCluster('nox', {
			ID: 0xFC31,
			attributes: {
				measuredValue: { ID: 0x0000, type: Zcl.DataType.UINT16 },
			},
			commands: {},
			commandsResponse: {},
		}),
		
        temperature(),
        humidity(),
        pm1(),
        pm25(),
		pm4(),
		pm10(),
		voc(),
		nox(),
    ],
    //exposes: [
    //    e.numeric('pm1', exposes.access.STATE)
    //        .withUnit('µg/m³')
    //        .withDescription('Measured PM1 (cluster pm1, attr measuredValue, endpoint 2)'),
    //    e.numeric('pm25', exposes.access.STATE)
    //        .withUnit('µg/m³')
    //        .withDescription('Measured PM2.5 (cluster pm25, attr measuredValue, endpoint 3)'),
	//	e.numeric('pm4', exposes.access.STATE)
    //        .withUnit('µg/m³')
    //        .withDescription('Measured PM4 (cluster pm4, attr measuredValue, endpoint 4)'),
	//	e.numeric('pm10', exposes.access.STATE)
    //        .withUnit('µg/m³')
    //        .withDescription('Measured PM10 (cluster pm10, attr measuredValue, endpoint 5)'),
	//	e.numeric('voc', exposes.access.STATE)
    //        //.withUnit('µg/m³')
    //        .withDescription('Measured voc (cluster voc, attr measuredValue, endpoint 6)'),
	//	e.numeric('nox', exposes.access.STATE)
    //        //.withUnit('µg/m³')
    //        .withDescription('Measured voc (cluster voc, attr measuredValue, endpoint 7)'),
    //],
    meta: {
        multiEndpoint: true,
    },
};

module.exports = definition;
