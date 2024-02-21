import { Box, Button } from "@mui/material";
import { useDocusign } from "../hook/useDocusign"

export const Docusign = () => {

    const { } = useDocusign();
    return (
        <Box>
            <Button color="primary" variant="contained" >Log in</Button>
        </Box>
    )
}

export default Docusign
