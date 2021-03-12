import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function RangeComponent({min, max, defaultValues, setPrice}: any) {
    return (
        <Range className="my-8" min={min} max={max} defaultValue={[defaultValues[0],defaultValues[1]]} onAfterChange={(value) => setPrice(value)}
        handleStyle={[{ boxShadow: `#000000`, backgroundColor: `#000000`, borderRadius: 0, borderWidth: 0 }, { boxShadow: `0 0 0 5 #52B5D8`, backgroundColor: `#52B5D8`, borderRadius: 0, borderWidth: 0 }]} 
        railStyle={{ backgroundColor: `#B2B2B2` }}
        trackStyle={[{ backgroundColor: `#000000` }]}/>
    )
}
