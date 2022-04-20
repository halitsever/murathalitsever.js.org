---
layout: post
title:  "Casper CSD Linux Touchpad Sorunu Çözümü"
date:   2021-09-19 02:36:23 +0300
---

Casper CSD cihazınızda herhangi bir linux dağıtımı kurulumu sonrası eğer ki touchpadiniz çalışmıyorsa aşağıdaki rehber yardımcı olabilir. 

Ubuntu sistemler için:

sudo -H gedit /etc/default/grub

GRUB_CMDLINE_LINUX_DEFAULT satırını

GRUB_CMDLINE_LINUX_DEFAULT="quiet splash i8042.reset i8042.nomux i8042.nopnp i8042.noloop"

bu şekilde değiştirin.

sudo update-grub

Komuduyla grub önyükleyiciyi güncellemeyi unutmayın ve ardından yeniden başlatın


Fedora 34:

sudo -H nano /etc/default/grub
GRUB_CMDLINE_LINUX_DEFAULT satırını
GRUB_CMDLINE_LINUX="rhgb quiet i8042.reset i8042.nomux i8042.nopnp i8042.noloop"

bu şekilde değiştirin.


sudo grub2-mkconfig -o /boot/grub2/grub.cfg


Komuduyla grub önyükleyiciyi güncellemeyi unutmayın ve ardından yeniden başlatın.