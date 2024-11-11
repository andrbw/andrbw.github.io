---
layout: page
title: Network simulation
description: (IITP, 2018 - 2022)
img: 
redirect: 
importance: 3
---

The course consists of series of labs focused on simulation of different wireless networks protocols. For most of the labs, an open source simulation platform [NS-3](https://www.nsnam.org/) is used. I was co-teaching this course from 2018 to 2022 to BS and MS students of Moscow Institute of Physics and Technology and Moscow State University at IITP RAS, Russia. This course is currently still being successfully taught. 

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

table, th, td {
  border: 1px solid black;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>

| Lab name                                                                        | Materials                              |
|---------------------------------------------------------------------------------|----------------------------------------|
| Introduction to simulation: discrete-event simulation, validation, verification | [A.M. Law. Simulation Modeling and Analysis](https://www.averill-law.com/simulation-book/)|
| Lab1: Simulation of G/G/1 queueing system in custom C++ discrete-event simulator| [repo](https://github.com/andrbw/gg1-simulator), [pres](/assets/pdf/teaching/ns3/gg1_cpp.pdf), [L. Kleinrock. Queueing Systems, Volume I](https://www.wiley.com/en-us/Queueing+Systems%2C+Volume+I-p-9780471491101)|
| Introduction to NS-3                                                            | [manual](https://www.nsnam.org/docs/manual/html/index.html), [tutorial](https://www.nsnam.org/docs/tutorial/html/)|
| Lab2: Simulation of G/G/1 queueing system in NS-3                               |                                        |
| Lab3: Simulation of pure and slotted Aloha in NS-3                              | [pure Aloha](https://dl.acm.org/doi/abs/10.1145/1478462.1478502), [slotted Aloha](https://dl.acm.org/doi/abs/10.1145/1024916.1024920)|
| Lab4: Modeling of Wi-Fi DCF in saturation, comparison with Bianchi model        | [Bianchi](https://ieeexplore.ieee.org/document/840210), [follow-up](https://ieeexplore.ieee.org/abstract/document/1496609)       |
| Lab5: Modeling of interference in Wi-Fi, comparison with analytical model       | [Interference](https://link.springer.com/article/10.1134/S0005117908090178)                    |
| Lab6: Modeling of Wi-Fi Mesh networks, neighborhood discovery protocol          | [NHDP](https://ieeexplore.ieee.org/abstract/document/6402849)                            |
| Lab7: Advanced modeling of interference in Wi-Fi, power management, carrier sense threshold | [Research](https://ieeexplore.ieee.org/document/8433721)            |


