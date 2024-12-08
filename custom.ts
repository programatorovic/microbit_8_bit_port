//% color="#AA278D" weight=100 icon="\uf2db" block="8-Bit Port"
namespace bitPort {
    //% blockId=bitPortSendByte block="Send Byte %data|D7 %d7|D6 %d6|D5 %d5|D4 %d4|D3 %d3|D2 %d2|D1 %d1|D0 %d0"
    //% data.min=0 data.max=255
    export function sendByte(data: number, d7: DigitalPin, d6: DigitalPin, d5: DigitalPin, d4: DigitalPin, d3: DigitalPin, d2: DigitalPin, d1: DigitalPin, d0: DigitalPin): void {
        pins.digitalWritePin(d7, (data & 0x80) ? 1 : 0)
        pins.digitalWritePin(d6, (data & 0x40) ? 1 : 0)
        pins.digitalWritePin(d5, (data & 0x20) ? 1 : 0)
        pins.digitalWritePin(d4, (data & 0x10) ? 1 : 0)
        pins.digitalWritePin(d3, (data & 0x08) ? 1 : 0)
        pins.digitalWritePin(d2, (data & 0x04) ? 1 : 0)
        pins.digitalWritePin(d1, (data & 0x02) ? 1 : 0)
        pins.digitalWritePin(d0, (data & 0x01) ? 1 : 0)
    }
}
