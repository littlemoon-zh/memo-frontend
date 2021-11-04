import {
    StatGroup,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    Box
} from "@chakra-ui/react"


const StatInfo = () => {
    return (
        <>
            <Box>
                <StatGroup>
                    <Stat>
                        <StatLabel>Record stat</StatLabel>
                        <StatNumber>345,670</StatNumber>
                        <StatHelpText>
                            <StatArrow type="increase" />
                            23.36%
                        </StatHelpText>
                    </Stat>

                    <Stat>
                        <StatLabel>Clicked</StatLabel>
                        <StatNumber>45</StatNumber>
                        <StatHelpText>
                            <StatArrow type="decrease" />
                            9.05%
                        </StatHelpText>
                    </Stat>
                </StatGroup>
            </Box>
        </>
    )
}

export default StatInfo