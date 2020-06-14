import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"

const Button = styled.button`
  
background: ${({ theme }) => theme.background};
border: 2px solid ${({ theme }) => theme.toggleBorder};
color: ${({ theme }) => theme.buttonText};
cursor: pointer;
padding: 0.6rem;
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
    return (
        <div className="themeSwitcher-container">
            <div className="container">
                <Button onClick={toggleTheme}>
                    {theme === "light" ?
                        <p>Dark Theme</p> : <p>Light Theme</p>
                    }
                </Button>
            </div>
        </div>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;