import * as React from "react"
import styled from "@emotion/styled"

import media from "utils/media"
import Input from "components/Input"
import SearchIcon from "components/icons/SearchIcon"

type Props = React.HTMLProps<HTMLInputElement>

const StyledSearchInput = styled(Input)({
  width: "40%",
  margin: "0 auto",
  marginBottom: 60,
  fontSize: 28,
  [media.tabletPortraitAndSmaller]: {
    width: "70%"
  },
  [media.phoneOnly]: {
    width: "90%"
  }
})

const SearchInput: React.FunctionComponent<Props> = props => (
  <StyledSearchInput type="text" icon={<SearchIcon />} {...props} />
)

export default SearchInput
