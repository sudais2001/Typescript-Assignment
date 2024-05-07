function make_greart2(magicians: string[]): string[]{
    const greatMagicians: string[] = [];
    for (let i =0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + 'the great');
    }
    return greatMagicians;
}

const magicians3: string[] = ["usman","hhaseeb","wajaht"];
const greatMagicians2: string[] = make_greart2(magicians3);

