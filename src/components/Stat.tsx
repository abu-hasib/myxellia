import {Stat as ChakraStat} from "@chakra-ui/react"

function Stat({label = "", value = ""}) {
  return (
    <ChakraStat.Root>
      <ChakraStat.Label>{label}</ChakraStat.Label>
      <ChakraStat.ValueText>{value}</ChakraStat.ValueText>
    </ChakraStat.Root>
  )
}

export default Stat