import flowerSticker from "../media/flower.png"
import { createClient } from '@supabase/supabase-js'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { Calendar } from '@fullcalendar/core'
import listPlugin from '@fullcalendar/list';
// import '../App.css';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

import flower from '../media/flower.jpeg';
import { useState, useEffect } from "react";
import React from 'react';
import ruha from '../media/ruha.png';
import bananaleaves from '../media/bananaleaves.jpg';
import bonnet from '../media/bonnet.jpg';
import knit from '../media/knit.jpg';
import kimchi from '../media/kimchi.jpg';
import bunito from '../media/bunito.jpg';
import farm from '../media/farm.jpg';
import ikebana from '../media/ikebana.jpg';
import ikebana2 from '../media/ikebana2.jpg';
import silver1 from '../media/silver1.jpeg';
import silver2 from '../media/silver2.jpeg';
import dolly from '../media/dolly.jpg';
import closeted from '../media/closeted.jpg';

function CraftClub() {
    const date = new Date("December 17, 2025 03:24:00")
    const grayColor = '#F2F2F2'
    //                     Boston Orgs: Boston Queer Fiber Arts, Boston Tech Poetics, and Live Code Boston. An occasional shoutout to Arts at the Armory, Artisans Asylum, and Gather Here.

    const bostonorgs = [
        { link: 'https://www.instagram.com/bostontechpoetics/?hl=en', name: '🌸 Boston Tech Poetics' },
        { link: 'https://www.instagram.com/bostonqueerfiberarts/?hl=en', name: '🌸 Boston Queer Fiber Arts' },
        { link: 'https://livecode.boston/', name: 'Live Code Boston' },
        { link: 'https://artsatthearmory.org/', name: 'Arts at the Armory' },
        { link: 'https://www.artisansasylum.com/', name: 'Artisans Asylum' },
        { link: 'https://gatherhereonline.com/?srsltid=AfmBOooJ3xRZpH9H1Z-buQMgPqxGRlpIxl-hD8OEhzeVxPrGW82j0RQw', name: '🌸 Gather Here' },
        { link: 'https://confluxcollective.org/', name: 'Conflux Collective' },
        { link: 'https://camlab.fas.harvard.edu/', name: 'Harvard CAMLab' },
        { link: 'https://pad.land/BostonArtLists', name: '🌸 Boston Arts List' },
        { link: 'https://www.artsboston.org/abcalendar/', name: 'Arts Boston Calendar' },


    ]

    const nyorgs = [
        { link: 'https://www.index-space.org/', name: '🌸 Index Space' },
        { link: 'https://sfpc.study/', name: 'School for Poetic Computation' },
        { link: 'https://feministspatialpractices.com/', name: 'Feminist Spatial Practices'}
    ]

    const bayorgs = [
        { link: 'https://grayarea.org/course/creative-code-intensive/', name: '🌸 Gray Area' },
        { link: 'https://rootdivision.org/', name: 'Root Division' },
        { link: 'https://bituinstudio.com/', name: 'Bituin Studio' },



    ]

    const otherorgs = [
        { link: 'https://tiat.place/', name: 'The Intersection of Art and Technology' },
        { link: 'https://www.index-space.org/', name: 'Index Space' },
        { link: 'https://feministspatialpractices.com/', name: 'Feminist Spatial Practices'},
        { link: 'https://playdates.commnunity/', name: 'Playdates' },
        { link: 'https://conditionaldesign.org/', name: 'Conditional Design' },
    ]

    const philorgs = [
        { link: 'https://www.instagram.com/ipo_ipo_projects/?hl=en', name: 'Ipo Ipo Projects' },
        { link: 'https://plantvision.substack.com/', name: 'Plant Visions' },
        { link: 'https://www.instagram.com/__63.ph/?hl=en', name: 'Space 63' },

        { link: 'https://www.ancan.store/', name: 'Ancán' },
        { link: 'https://developh.org/', name: '🌸 DeveloPh' },

    ]


    const [images, setImages] = useState(
        [

            {
                key: 0,
                image: bananaleaves
            },
            {
                key: 0,
                image: dolly
            },
            {
                key: 1,
                image: knit
            },

            {
                key: 0,
                image: bonnet
            },
            {
                key: 0,
                image: kimchi
            }, {
                key: 0,
                image: bananaleaves
            },
            {
                key: 0,
                image: dolly
            },
            {
                key: 1,
                image: knit
            },
            {
                key: 0,
                image: kimchi
            },

            {
                key: 0,
                image: bonnet
            }
        ]
    )

    useEffect(() => {
        // Set up the interval to run every 5000 milliseconds (5 seconds)
        // const intervalId = setInterval(() => {
        //   // Use the functional state update to safely access the previous array
        //   setImages(prevArray => {
        //     const shifted = prevArray[0];
        //     console.log(shifted, prevArray.length);
        //     prevArray.shift();
        //     prevArray.push(shifted);
        //     // const newArray = [...prevArray, shifted];

        //     // Create a new array by spreading the previous array twice
        //     // const newArray = [...prevArray, ...prevArray];
        //     // In a real application, you might want a condition to stop the duplication
        //     // For demonstration, this will keep growing
        //     return prevArray;
        //   });
        // }, 1000)
    }
    )

    return (
        <div style={{ textAlign: "left", padding: '5%', paddingTop: '5rem', color: '#3A3A3A', backgroundColor: '#F2F2F2' }}>
            <div style={{ textAlign: "left" }}>

                <div style={{ width: '100%', marginRight: '10px', padding: '0px' }}>
                    <img src={flowerSticker} className="App-logo" alt="flower" style={{ width: "60px", height: "60px" }} />
                    <h3 style={{ paddingTop: "2rem", height: "" }}>school bell!
                        <br></br>time to play ~</h3>
                    <h1 style={{ fontSize: '5rem', color: '#3A3A3A', paddingBottom: '0rem', marginBottom: '0rem', fontFeatureSettings: '"ss01"' }}>recess</h1>
                    <hr style={{ backgroundColor: '' }} />

                    {/* <p>weekly crafting in Boston & the Bay</p> */}
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: '0.5rem' }}>
                    <div style={{ width: '200px', marginRight: '10px', paddingRight: '', flex: '0 0 auto' }}>
                        <h3> <a href='#calendar'>calendar</a> ✶ <a href="#crafts">crafts</a></h3>

                    </div>
                    <div style={{ width: "720px", paddingTop: "", marginRight: '0rem' }}>

                        <h2>soft ways to connect with ourselves, each other, & our crafts</h2>
                        <h4> <b>PLAYGROUND RULES</b></h4>
                        <p>follow your heart, try something new → be bad at it, <a href='https://www.optoutproject.net/about-the-opt-out-project/'>opt out</a>, practice being<a href='https://theanarchistlibrary.org/library/lee-shevek-process-centered-love'> process-centered</a>, reject perfection, embrace whimsy, <a href='https://infrastructures.us/en/class/'>challenge</a>  the technocapitalist worldview, do <a href='https://www.goodreads.com/book/show/42771901-how-to-do-nothing'> nothing</a>
                        </p>

                    </div>
                </div>
            </div>



            <div style={{ textAlign: "left" }}>

                {/* <h3 >We'll let you know about the next one!</h3>

            <input type="text" id="contact" name="contact" />
            <p>email jiannaso@gmail.com for locations</p> */}
                <div className='logos'>
                    <div className="logos-slide">
                        {images.map((item) => (

                            <img style={{ width: '' }} src={item.image} />
                        )
                        )}
                    </div>

                </div>

                <div className='floating-text' style={{}}>
                    <h1 id='calendar' style={{ paddingTop: '0rem',textAlign: 'left' }} >Craft Calendar</h1>
                    {/* Events in the area! */}
                    {/* <br></br> */}
                    <p style={{marginBottom: '2rem'}}>
                        <a href='https://calendar.google.com/calendar/u/0?cid=NTQ1YzdkZGM3OTQwZGM0M2UzOGYxZTE1Mjc0MjNjYmNlOTBiMzhhMTVhNDdkMzJlMGFjNjQyZmYzYTY3ZjhjMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t'>view and add events to the gcal ↗</a>
                        <br></br>
                        <br></br>

                        🌸 = Recess! (hosted by our community)

                        
                        <br></br>
                        <br></br>

                        Craft nights: <b>BYOC</b> (Bring Your Own Craft) is mandatory! "Craft" is medium-inclusive: textiles, paints, digital art, collage, coloring books, life itself. The craft world is your oyster 🌱
                        <br></br>
                        <br></br>
                        Other events are populated manually, from (some of) the orgs below ↓
                       
                        

                        

                        

                        

                        


                    </p>
                </div>

                {/* <br></br> */}
                {/* 🌱 = Community craft nights (Boston, Bay Area) */}

                {/* 
AIzaSyC1mvPfHAQu0hXJnkMTGGMsDE5Y0rlQPIQ
545c7ddc7940dc43e38f1e1527423cbce90b38a15a47d32e0ac642ff3a67f8c0@group.calendar.google.com

*/}


                <div id='calendar'>
                    <FullCalendar id='calendar'
                        eventBackgroundColor={grayColor}
                        plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}
                        initialView='listMonth'
                        titleFormat={{ month: 'numeric', day: 'numeric' }}
                        eventDisplay={''}
                        views={{
                            week: {
                                type: 'dayGrid',
                                duration: { weeks: 2 },
                            },
                            list: {
                                type: 'listWeek',
                            }

                        }}
                        height={'500px'}
                        headerToolbar={{
                            right: 'listMonth,week,prev,next' // user can switch between the two
                        }}
                        googleCalendarApiKey={'AIzaSyC1mvPfHAQu0hXJnkMTGGMsDE5Y0rlQPIQ'}
                        events={{
                            googleCalendarId: '545c7ddc7940dc43e38f1e1527423cbce90b38a15a47d32e0ac642ff3a67f8c0@group.calendar.google.com'
                        }}
                        duration={'14'}
                    //   headerToolbar= {
                    //     left: 'prev,next',
                    //     center: 'title',
                    //     right: 'dayGridWeek,dayGridDay' // user can switch between the two
                    //   }

                    />
                </div>




                <div style={{ textAlign: "left" }}>
                <h1 id='crafts' style={{ paddingTop: '4rem' }}>Craft communities</h1>
                <p>In Boston, the Bay, New York, & the Philippines. + inspirations! 
                    <br></br>
                    <br></br>

                    🌸 = favs of Recess<br></br></p>
<div style={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', overflow: 'scroll'}}>

<div className='org-list'>
<h3>Boston</h3>                        <ul style={{ padding: '0rem' }}>

                            {bostonorgs.map((org) => (
                                <li>
                                    <a href={org.link}>
                                        {org.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
</div>

<div className='org-list'>
    <h3>Bay Area</h3>
                        <ul style={{ padding: '0rem' }}>

                            {bayorgs.map((org) => (
                                <li>
                                <a href={org.link}>
                                        {org.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
</div>

<div className='org-list'>
<h3>New York</h3>                       <ul style={{ padding: '0rem' }}>

                            {nyorgs.map((org) => (
                                <li>
                                <a href={org.link}>
                                        {org.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
</div>

<div className='org-list'>
<h3>Philippines</h3>                        <ul style={{ padding: '0rem' }}>

                            {philorgs.map((org) => (
                                <li>
                                <a href={org.link}>
                                        {org.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
</div>

<div className='org-list'>
<h3>Inspiration</h3>
                        <ul style={{ padding: '0rem' }}>

                            {otherorgs.map((org) => (
                                <li>
                                <a href={org.link}>
                                        {org.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
</div>
</div>
<br></br>
<p style={{textAlign:'right'}}><i>scroll →</i></p>

                    <h1 id='crafts' style={{ paddingTop: '4rem' }}>Crafts & Resources</h1>
                    <p>
                        Resources on what got me started and what continues to inspire me! I owe my craft life to the worldwide craft community online and in my many homes.
<br></br>
<br></br>

                        <i>To add: P5.js, Touch Designer, web dev, silversmithing 
                        <br></br>
 + yours!!!</i>

                        <h2 style={{ paddingTop: '2rem' }}>Knitting</h2>
                        I grew up crocheting with my lola but knitting has become my favorite fiber art. I freehand most designs I knit; it connects me to myself, my taste, my body, and my craft. I have very simple freehand guides that I'm working on sharing!

                        <div style={{ display: "", flexDirection: "", justifyContent: "space-between" }}>

                            <div>
                                <h4 style={{ paddingTop: '2rem' }}>The basics</h4>

                                <ul>
                                    <li>
                                        How to Knit and Purl [<a href='https://www.youtube.com/watch?v=04yQXiQGsLs'>youtube</a>]: the only two stitches you'll ever need xx
                                    </li>

                                    <li>
                                        How to freehand: lots of resources on @novemberr.studios [<a href='https://www.instagram.com/novemberr.studios/reels/'>IG</a>], starting with this series: <a href='https://www.instagram.com/reel/DLlKjQoRv86/'>1: inspo</a>, <a href='https://www.instagram.com/reel/DLqS5PYzauZ/'>2: construction</a>, <a href='https://www.instagram.com/reel/DL8QOHWxtts/'>3: gauge swatch</a>, <a href='https://www.instagram.com/reel/DMJN1lDR-MX/'>4: knitting</a>!
                                    </li>

                                    <li>
                                        Bonnet patterns for <a href='https://www.youtube.com/watch?v=KujHVLXpA2o'>crocheting</a> or <a href='https://www.youtube.com/watch?v=t3-GCLRYGaA&pp=ygULYm9ubmV0IGtuaXQ%3D'>knitting</a> by Material Grrrlz: a perfect, short, sweet, & satisfying beginner project
                                    </li>

                                    <li>
                                        Finishing a project: <a href='https://www.susannawinter.net/post/updated-comparison-of-20-bind-off-methods#google_vignette'>How Stretchy is Stretchy? Updated Comparison of 20 Bind-off Methods
                                        </a>
                                    </li>

                                    <li>
                                        Yarn stores:
                                        <a href='https://blacksquirrelberkeley.com/'> Gather Here</a> (Cambridge), <a href='https://makeandmendshop.com/?srsltid=AfmBOopVPFX6V90cQkGYdFb4AiKmSmUkUhGv6GG0Qif0oo6cZ8UgY2e8' >Make and Mend </a>(Somerville),
                                        <a href='https://blacksquirrelberkeley.com/'> Black Squirrel Yarns</a> (Berkeley),
                                        secondhand/thrift stores (anywhere!!! usually in the craft/home section)
                                    </li>

                                    <li>
                                        Positive and negative ease is how to make something "fitted" or "loose". <a href='https://www.purlsoho.com/create/understanding-ease-selecting-your-size/?srsltid=AfmBOoruOB5UKHoJO7ES4nmIMh3CUtQZtyuUxF3Dtd2BOfNbZg1AIwXP'>This</a> is a perf beginner guide from Purl Soho.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4>Creators</h4>
                                <ul>
                                    <li>
                                        <a href='https://www.loupystudio.co.uk/'>Loupy Studio</a>: my OG inspo! She has the most slayful free patterns
                                    </li>

                                    <li>
                                        <a href='https://www.instagram.com/dazy_chains/'>Dazy Chains</a>: incredibleeee algorithmic patterns
                                    </li>

                                    <li>
                                        <a href='https://www.instagram.com/cristinacriaco/'>Cristina Criaco</a>: lovely asymmetrical stripes
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4>Research</h4>

                                <ul>
                                    <li>
                                        <a href='https://www.media.mit.edu/projects/computational-knitting-patterns/overview/'>Computational Knitting Patterns (MIT Media Lab)</a>
                                    </li>

                                    <li>
                                        Syllabus: <a href='../media/AFVS136K.pdf'>Woven Forms: The Textile Studio</a> (Harvard AFVS 136K)
                                    </li>

                                    <li>
                                        <a href='https://opensource.com/article/18/6/how-programming-evolved-knitting'>
                                            Programming owes its strength to our long legacy of knitting
                                        </a>
                                    </li>

                                    <li>
                                        Are.na: <a href='https://www.are.na/ji-so/yarnwork-as-possibility-and-protest'>yarnwork as possibility and protest</a>
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </p>
                </div>

            </div>

            <h4 style={{ paddingBottom: '3rem', paddingTop: "2rem", textAlign: 'center' }}>
                🌸
                <br></br>
                <br></br>

                This playground was <a href='https://www.jiso.design/journal/handcrafted'>hand-crafted </a>by Ji with assets made by Filipino artists
            </h4>
        </div>
    );
}

export default CraftClub;