import { Box } from "@mui/material";
import Header from "../../Components/Header";


const dashboard = ()=>{
    return (
        <Box ml={2} display={'flex'} justifyContent="space-between" alignItems={"center"}>
            <Header title={"Dashboard"} subtitle={"Welcome to your dashboard"}/>
        </Box>
    )
}

export default dashboard;