import React from 'react'
import {MainContainer} from '../../globalStyles/Global.styles';
import { ContentWrapper, HeadingTitle } from './PageUi.style'
const PageUi = ({title}) => {
  return (
    <ContentWrapper>
        <MainContainer>          
            <HeadingTitle>{title}</HeadingTitle>
        </MainContainer>
    </ContentWrapper>
  )
}

export default PageUi