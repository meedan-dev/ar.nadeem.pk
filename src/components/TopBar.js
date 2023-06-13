import React from "react";
import { Navbar, Link, Text } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { Spacer } from '@nextui-org/react';
import { useState, useRef, useEffect } from "react";

function TopBar({ setTheme, isDark, type, scrollToElement }) {
    function isInViewport(offset = 0) {
        const h = document.getElementById('#Home');
        const p = document.getElementById('#Projects');
        const s = document.getElementById('#Skills');
        // console.log(s)
        if (!h || !s || !p) return false;
        if (isVisible(h)) {
            setActiveButton('Home')
        }
        else if (isVisible(p)) {
            setActiveButton('Projects')
        }

        else if (isVisible(s)) {
            setActiveButton('Skills')
        }

    };
    function isVisible(element, offset = 0) {
        const top = element.getBoundingClientRect().top;
        return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
    }

    useEffect(() => {
        window.addEventListener('scroll', isInViewport);
        return () => window.removeEventListener('scroll', isInViewport);
    });


    const navbarToggleRef = useRef()

    const [activeButton, setActiveButton] = useState('Home');
    const menuItems = [
        "Home",
        "Projects",
        "Skills",
        // "Portfolio",
    ];

    return (
        <Navbar isBordered variant="floating">


            {/* BRAND NAME */}

            <Navbar.Brand>
                <Navbar.Toggle aria-label="toggle navigation" showIn={"sm"} ref={navbarToggleRef} />
                <Spacer x={0.5} />
                <Text b color="inherit">
                    AbdulRahman Nadeem
                </Text>

            </Navbar.Brand>

            {/* Menus */}
            {/* Phone */}

            <Navbar.Collapse collapseItems={true}>
                {menuItems.map((item, index) => (
                    <Navbar.CollapseItem key={item}>
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            // href={`#${item}`}
                            isActive={activeButton === `${item}`}
                            onPress={() => { navbarToggleRef.current.click(); scrollToElement(`${item}`); }}
                        >
                            {item}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
            {/* Computer */}
            <Navbar.Content variant='highlight-rounded' hideIn="sm">
                {
                    menuItems.map((item, index) => (
                        <Navbar.Link
                            isActive={activeButton === `${item}` ? true : false}
                            onPress={() => {

                                scrollToElement(`${item}`);
                            }}
                        // href={`#${item}`}
                        >
                            {`${item}`}
                        </Navbar.Link>

                    ))

                }
            </Navbar.Content >

            {/* Side Buttons */}
            < Navbar.Content >
                <Navbar.Item>
                    <Switch
                        checked={isDark}
                        onChange={(e) => (setTheme(e.target.checked ? 'dark' : 'light'))}
                    />
                </Navbar.Item>
            </Navbar.Content >
        </Navbar >

    );
}

export default TopBar;
