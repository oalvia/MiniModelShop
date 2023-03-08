export interface Product {
    productId: string,
    scale: Scale,
    brand: Brand,
    description: string,
    type: Type,
    tags: Tags[],
    // addDescription?: string,
    stock: number,
    price: number,
    score: number,
    image: string
}

  export type Scale = '1:200' | '1:144'  | '1:100' | '1:72' | '1:48'| '1:32';

  export type Type = 'Base Kit' |'Detailing Set' |'Aftermarket Decals' |'Multimedia Kit';

  export type Tags = 'Jet' |'Piston Engine' |'Turboprop' |'Rocket engine' |'Fighter' |'Bomber' |'Helicopter' |'Glider' |'Comercial' |'Utility' |'Aerobatics' |'Amphibious' |'Multi-Engine' |'Biplane' |'Balloons' |'Gyroplane' |'Single Engine' |'Tricycle Gear' |'Business Jets' |'Taildraggers' |'Tiltrotors' |'Light-Sport Aircraft' |'Floatplane' |'Cargo planes' |'Commercial' |'Experimental' |'Agricultural' |'Trainer' |'Fire-fighter' |'Tanker' |'Concept' |'Reco' |'Military' |'Civil' |'Radar' |'Prototype';

  export type Brand = 'ACADEMY' |'AIRFIX' |'AZUR' |'CLASSIC PLANE' |'CMK' |'CONDOR' |'DML/DRAGON' |'EDUARD' |'IBG Models' |'FINE MOLDS' |'FUJIMI' |'HASEGAWA' |'HELLER' |'HOBBYCRAFT' |'ICM' |'ITALERI' |'KANGNAM' |'KP' |'M. PRO-MODELLER' |'MACH 2' |'MATCHBOX' |'MINICRAFT' |'MODELCRAFT' |'MONOGRAM' |'MPM' |'PREMIERE' |'REVELL' |'RODEN' |'SMER' |'SPECIAL HOBBY' |'SWORD' |'TAMIYA' |'TRUMPETER' |'ZVEZDA';
