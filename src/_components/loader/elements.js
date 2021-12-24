import styled from 'styled-components'

export const DotPulse = styled.div`
    position: relative;
    left: -9999px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    box-shadow: 9999px 0 0 -5px #9880ff;
    animation: dotPulse 1.5s infinite linear;
    animation-delay: .25s;

    &:before, :after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: #9880ff;
        color: #9880ff;
    }
    &:before {
        box-shadow: 9984px 0 0 -5px #9880ff;
        animation: dotPulseBefore 1.5s infinite linear;
        animation-delay: 0s;
    }
    &:after {
        box-shadow: 10014px 0 0 -5px #9880ff;
        animation: dotPulseAfter 1.5s infinite linear;
        animation-delay: .5s;
    }
    @keyframes dotPulseBefore {
    0% {
      box-shadow: 9984px 0 0 -5px #9880ff;
    }
    30% {
      box-shadow: 9984px 0 0 2px #9880ff;
    }
    60%,
    100% {
      box-shadow: 9984px 0 0 -5px #9880ff;
    }
  }
  
  @keyframes dotPulse {
    0% {
      box-shadow: 9999px 0 0 -5px #9880ff;
    }
    30% {
      box-shadow: 9999px 0 0 2px #9880ff;
    }
    60%,
    100% {
      box-shadow: 9999px 0 0 -5px #9880ff;
    }
  }
  
  @keyframes dotPulseAfter {
    0% {
      box-shadow: 10014px 0 0 -5px #9880ff;
    }
    30% {
      box-shadow: 10014px 0 0 2px #9880ff;
    }
    60%,
    100% {
      box-shadow: 10014px 0 0 -5px #9880ff;
    }
  }
`