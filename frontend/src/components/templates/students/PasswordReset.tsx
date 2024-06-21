import Header from 'components/organisms/students/header'
import PasswordReset from 'components/organisms/students/password_reset'
import * as React from 'react'
import styled from 'styled-components'

export default () => {
  return (
    <Container>
      <PasswordReset />
      <Header theme="white" text="Password Reset" hasBackButton={true} />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  box-sizing: border-box;
  padding: 280px 64px 0;
`