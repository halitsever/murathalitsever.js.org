---
layout: post
title:  "Casper CSD Hackintosh Installation"
date:   2021-09-19 03:36:23 +0300
---


Make hackintosh installation on your old Casper CSD with Opencore

Firstly i need to write this, DISCLAIMER i dont give warranty for any devices, I'm not responsible for your computer

<b>Notice:</b> you have to generate your own SMBIOS/SerialNumber, SMBIOS/BoardSerialNumber and SMBIOS/SmUUID.

You can either install your hackintosh all by yourself or you can use my EFI folders to install and run the hackintosh.

If your device have i7 or i3 processor you need create diffrent CpuFriendProvider.kext with <a href="https://github.com/fewtarius/CPUFriendFriend">CpuFriendFriend</a> tool.


<a href="https://github.com/halitsever/casper-csd ">https://github.com/halitsever/casper-csd </a>

After download efi, change your efi folder to downloaded efi folder.

Finally if you don't have atheros network card, you need delete kexts below:


AtherosWiFiInjector.kext

AirPortAtheros40.kext

if you done this steps you are ready for installation you can make installation easily like mac devices

