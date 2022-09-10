import React from 'react'


import imac from '../../assets/img/IMac.jpg'
import abacus from '../../assets/img/abacus.gif'
import napier from "../../assets/img/napier-bones.png";
import Pascaline from "../../assets/img/pascaline.png";
import Reckonerl from "../../assets/img/stepped-reckoner-or-leibnitz-wheel.png";
import Engine from "../../assets/img/difference-engine.png";
import Analytical from '../../assets/img/analytical-engine.png'
import Tabulating from '../../assets/img/tabulating.png'
import Differential from '../../assets/img/differencal.png'
import MarkOne from '../../assets/img/Mark-One.jpg'
import Generation from '../../assets/img/Generation.jpg'
import ENIAC from '../../assets/img/ENIAC.jpg'
import UNIVAC from '../../assets/img/univac_1108.png'
import PCP from '../../assets/img/pcp.jpg'
import DEC from '../../assets/img/dec.jpg'
import MacBook from '../../assets/img/macbook.jpg'
import owner from '../../assets/img/owner.png'
import { Left } from '../templates/Left'
import { Right } from '../templates/Right'
import { LeftOrder } from "../templates/LeftOrder";
export const Hero = () => {
  return (
      <>
<LeftOrder 
Heading={`Aryan Pamwani`}
Para={`I am a talented, ambitious and hardworking individual, with broad skills and experience in digital and printed marketing, social media and leading projects. Furthermore, I am adept at handling multiple tasks on a daily basis competently and at working well under pressure. `}
SubPara={``}
Img={owner}
Button={'Visit Now'}

/>
      
<Right
Heading={"Computers"}
Para={"Computers and electronics play an enormous role in today's society, impacting everything from communication and medicine to science. "}
ID={'Computers'}

Img={imac}

SubPara={"A computer system is a complete computer that includes the hardware, operating system (main software), and peripheral equipment needed and used for full operation. This term may also refer to a group of computers that are linked and function together, such as a computer network or computer cluster."}

/>

      <Left
      Heading={"Abacus: Regraded as the first Computer"}
        Para={"The abacus (plural abaci or abacuses), also called a counting frame, is a calculating tool which has been used since ancient times. It was used in the ancient Near East, Europe, China, and Russia, centuries before the adoption of the Hindu-Arabic numeral system. The exact origin of the abacus has not yet emerged. It consists of rows of movable beads, or similar objects, strung on a wire. They represent digits. One of the two numbers is set up, and the beads are manipulated to perform an operation such as addition, or even a square or cubic root. "}
      ID={'Abacus'}
      
      Img={abacus}
      
      // SubPara={"In their earliest designs, the rows of beads could be loose on a flat surface or sliding in grooves. Later the beads were made to slide on rods and built into a frame, allowing faster manipulation. Abacuses are still made, often as a bamboo frame with beads sliding on wires. In the ancient world, particularly before the introduction of positional notation, abacuses were a practical calculating tool. The abacus is still used to teach the fundamentals of mathematics to some children, for example, in Russia."}
     
      />
      <Right
      Heading={"Napier's Bones"}
      Para={"It was a manually-operated calculating device which was invented by John Napier (1550-1617) of Merchiston. In this calculating tool, he used 9 different ivory strips or bones marked with numbers to multiply and divide.  "}
      SubPara={"The complete device usually includes a base board with a rim; the user places Napier's rods inside the rim to conduct multiplication or division. The board's left edge is divided into nine squares, holding the numbers 1 to 9."}
    
    Img={napier}
    ID={'Napier'}
   
      />

<Left
      Heading={"Pascaline"}
        Para={"Pascaline is also known as Arithmetic Machine or Adding Machine. It was invented between 1642 and 1644 by a French mathematician-philosopher Biaise Pascal. It is believed that it was the first mechanical and automatic calculator. "}
      
      
      Img={Pascaline}
      
      SubPara={"Pascal invented this machine to help his father, a tax accountant. It could only perform addition and subtraction. It was a wooden box with a series of gears and wheels. When a wheel is rotated one revolution, it rotates the neighboring wheel. A series of windows is given on the top of the wheels to read the totals. "}
ID={"Pascaline"}
      />

      



<Right
      Heading={"Stepped Reckoner or Leibnitz wheel"}
        Para={"It was developed by a German mathematician-philosopher Gottfried Wilhelm Leibnitz in 1673. He improved Pascal's invention to develop this machine. It was a digital mechanical calculator which was called the stepped reckoner as instead of gears it was made of fluted drums.  "}
      
      
      Img={Reckonerl}
      ID={'Stepped'}
      
    
      />
      <Left
      Heading={"Difference Engine"}
      Para={`In the early 1820s, it was designed by Charles Babbage who is known as "Father of Modern Computer". It was a mechanical computer which could perform simple calculations. It was a steam driven calculating machine designed to solve tables of numbers like logarithm tables. `}
    
    
    Img={Engine}
    ID={'Difference'}
    SubPara={`In 1823, the British government gave Babbage £1700 to start work on the project. Although Babbage's design was feasible, the metalworking techniques of the era could not economically make parts in the precision and quantity required. Thus the implementation proved to be much more expensive and doubtful of success than the government's initial estimate. According to the 1830 design it would have about 25,000 parts and would have weighed an estimated 4 tons. In 1832, Babbage and Joseph Clement produced a small working model (one-seventh of the calculating section of Difference Engine No. 1, which was intended to operate on 20-digit numbers and sixth-order differences) which operated on 6-digit numbers and second-order differences. Lady Byron described seeing the working prototype in 1833: "We both went to see the thinking machine (or so it seems) last Monday. It raised several Nos. to the 2nd and 3rd powers, and extracted the root of a Quadratic equation." Work on the larger engine was suspended in 1833.`}

      />
<Right 
Heading={`Analytical Engine`}
Para={`This calculating machine was also developed by Charles Babbage in 1830. It was a mechanical computer that used punch-cards as input. It was capable of solving any mathematical problem and storing information as a permanent memory.`}
SubPara={``}
Img={Analytical}
ID={'Analytical'}

/>
<Left 
Heading={`Tabulating Machine`}
Para={`It was invented in 1890, by Herman Hollerith, an American statistician. It was a mechanical tabulator based on punch cards. It could tabulate statistics and record or sort data or information. This machine was used in the 1890 U.S. Census. Hollerith also started the Hollerith?s Tabulating Machine Company which later became International Business Machine (IBM) in 1924.`}
SubPara={``}
Img={Tabulating}
ID={'Tabulating'}

/>

      
<Right 
Heading={`Differential Analyzer`}
Para={`It was the first electronic computer introduced in the United States in 1930. It was an analog device invented by Vannevar Bush. This machine has vacuum tubes to switch electrical signals to perform calculations. It could do 25 calculations in few minutes.`}
SubPara={``}
Img={Differential}
ID={'Differential'}

/>
<Left 
Heading={`Mark I`}
Para={`The next major changes in the history of computer began in 1937 when Howard Aiken planned to develop a machine that could perform calculations involving large numbers. In 1944, Mark I computer was built as a partnership between IBM and Harvard. It was the first programmable digital computer`}
SubPara={``}
Img={MarkOne}
ID={'Mark'}

/> 

<Right 
Heading={`Generations of Computers`}
Para={`A generation of computers refers to the specific improvements in computer technology with time. In 1946, electronic pathways called circuits were developed to perform the counting. It replaced the gears and other mechanical parts used for counting in previous computing machines.
In each new generation, the circuits became smaller and more advanced than the previous generation circuits. The miniaturization helped increase the speed, memory and power of computers. There are five generations of computers which are described below;`}
SubPara={``}
Img={Generation}


/>
<Left 
Heading={`First Generation Computers`}
Para={`The first generation (1946-1959) computers were slow, huge and expensive. In these computers, vacuum tubes were used as the basic components of CPU and memory. These computers were mainly depended on batch operating system and punch cards. Magnetic tape and paper tape were used as output and input devices in this generation;

Some of the popular first generation computers are;

ENIAC ( Electronic Numerical Integrator and Computer)
EDVAC ( Electronic Discrete Variable Automatic Computer)
UNIVACI( Universal Automatic Computer)
IBM-701
IBM-650`}
SubPara={``}
Img={ENIAC}
ID={'First'}

/> 
<Right 
Heading={`Second Generation Computers
`}
Para={`The second generation (1959-1965) was the era of the transistor computers. These computers used transistors which were cheap, compact and consuming less power; it made transistor computers faster than the first generation computers.`}
SubPara={`In this generation, magnetic cores were used as the primary memory and magnetic disc and tapes were used as the secondary storage. Assembly language and programming languages like COBOL and FORTRAN, and Batch processing and multiprogramming operating systems were used in these computers.

Some of the popular second generation computers are;

IBM 1620
IBM 7094
CDC 1604
CDC 3600
UNIVAC 1108
`}
Img={UNIVAC}
ID={'Second'}

/>
<Left 
Heading={` Generation Computers`}
Para={`The third generation computers used integrated circuits (ICs) instead of transistors. A single IC can pack huge number of transistors which increased the power of a computer and reduced the cost. The computers also became more reliable, efficient and smaller in size. These generation computers used remote processing, time-sharing, multi programming as operating system. Also, the high-level programming languages like FORTRON-II TO IV, COBOL, PASCAL PL/1, ALGOL-68 were used in this generation.Some of the popular third generation computers are;

IBM-360 series
Honeywell-6000 series
PDP(Personal Data Processor)
IBM-370/168
TDC-316`}
SubPara={``}
Img={PCP}
ID={'Third'}

/> 
<Right 
Heading={`Fourth Generation Computers`}
Para={`The fourth generation (1971-1980) computers used very large scale integrated (VLSI) circuits; a chip containing millions of transistors and other circuit elements. These chips made this generation computers more compact, powerful, fast and affordable. These generation computers used real time, time sharing and distributed operating system. The programming languages like C, C++, DBASE were also used in this generation.

Some of the popular fourth generation computers are;

DEC 10
STAR 1000
PDP 11
CRAY-1(Super Computer)
CRAY-X-MP(Super Computer)`}
SubPara={``}
Img={DEC}
ID={'Fourth'}

/>
<Left 
Heading={`Fifth Generation Computers
`}
Para={`In fifth generation (1980-till date) computers, the VLSI technology was replaced with ULSI (Ultra Large Scale Integration). It made possible the production of microprocessor chips with ten million electronic components. This generation computers used parallel processing hardware and AI (Artificial Intelligence) software. The programming languages used in this generation were C, C++, Java, .Net, etc.

Some of the popular fifth generation computers are;

Desktop
Laptop
NoteBook
UltraBook
ChromeBook
`}
SubPara={``}
Img={MacBook}
ID={'Fifth'}

      /> 

      {/*  Computers */}
     {/* Computers and electronics play an enormous role in today's society, impacting everything from communication and medicine to science. */}
   {/* Computers and electronics play an enormous role in today's society, impacting everything from communication and medicine to science. */}
      
      </>
  )
}
{/* <Right 
Heading={``}
Para={``}
SubPara={``}
Img={imac}


/>
<Left 
Heading={``}
Para={``}
SubPara={``}
Img={imac}


/> */}