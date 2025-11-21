namespace høydeberegning {
    /**
     * Beregner barometrisk høyde basert på trykk og temperatur.
     */
    //% block="barometrisk høyde (m) for|p = $p (Pa)|p1 = $p1 (Pa)|T1 = $T1 (K)|a = $a (K/m)|h1 = $h1 (m)|R = $R (J/(kg·K))|g0 = $g0 (m/s²)"
    //% blockSetVariable="h"
    //% group="Barometrisk formel"
    //% weight=100
    //% p.defl=101325 p1.defl=101325 T1.defl=288 a.defl=0.0065 h1.defl=0 R.defl=287 g0.defl=9.81
    export function barometricHeight(
        p: number = 101325,
        p1: number = 101325,
        T1: number = 288,
        a: number = 0.0065,
        h1: number = 0,
        R: number = 287,
        g0: number = 9.81
    ): number {
        return h1 + (T1 / a) * (Math.pow((p / p1), (-(R * a) / g0)) - 1);
    }
}
