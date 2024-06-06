'use client';

import style from "@/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from 'react';
export default function Navigation() {

    const [scrollingDown, setScrollingDown]=useState(false);
    
    const handleScroll = () =>{
        const scrollDefault=window.scrollY;

        if(scrollDefault<100){
            setScrollingDown(false);
        }else{
            setScrollingDown(true);
        }

    }
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])

    return (
        <nav className={`${style.navigation} ${scrollingDown? style.down : ''}`}>
            <div className={style.container_logo}>
                <Image
                    src="/logo.png"
                    alt="Logo"
                    height={0}
                    width={100}
                    className={`${style.logo} ${scrollingDown? style.down : ''}`}
                />
            </div>
            <div className={style.menu}>
                <Link href="/" legacyBehavior><a>inicio</a></Link>
                <Link href="/Search" legacyBehavior><a>busca YA!</a></Link>
            </div>
        </nav>
    )
}