import { InputLabel, NativeSelect, FormControl } from "@mui/material";
export default function Select({label, data, keyS}) {

    function selectChangeHandler(event) {
        console.log(event.target.value)
    }


    return (
        <>
        <FormControl fullWidth sx={{marginBottom: '15px'}}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                {label}
            </InputLabel>
            <NativeSelect
                onChange={selectChangeHandler}
                defaultValue={30}
                inputProps={{
                name: 'age',
                id: 'uncontrolled-native',
                }}
            >
                {data.map(item => 
                    <option>{item}</option>
                )}
            </NativeSelect>
            </FormControl>
            </>

       
    );
}