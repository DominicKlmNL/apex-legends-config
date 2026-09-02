<div align="center">
  
# Apex Legends Configuration Files

</div>
<br>

<div id="logo" align="center">

  ![Apex Legends](./assets/apexrevenant.png)

</div>
<br>

<div id="navigation" align="center">

[Introduction](#introduction)  |  [Context](#Context)  |  [Files](#Files)  |  [Installation](#Installation)  |  [Launch options](https://github.com/DominicKlmNL/apex-legends-config/blob/main/launchoptions.md)  |  [In-game settings](https://github.com/DominicKlmNL/apex-legends-config/blob/main/ingame.md)  |  [Autoexec.cfg](https://github.com/DominicKlmNL/apex-legends-config/blob/main/autoexec.cfg)  |  [Videoconfig.txt](https://github.com/DominicKlmNL/apex-legends-config/blob/main/videoconfig.txt)  |  [Nvidia settings](https://github.com/DominicKlmNL/apex-legends-config/blob/main/nvidia-settings.md)  |  [Changelog](#CHANGELOG)    [License](#License)

</div>
<br>

<div id="introduction">

## Introduction

<p>All settings in the configuration file, launch options and autoexec have been validated.</p>
<p>In the instructions for launch options there is a table with the function and benefit of the commands.</p>
<p>For the autoexec.cfg the function can be found as comments behind the setting within the file. </p>
<p>Since the videoconfig.txt is a native built-in file, there is no further background information within the instruction or file.</p>  
<br>

| Validation of configuration settings | Date |
| :--- | :---: |
| Date latest validation of the configuration commands are working and active functions:  | 📅 <sup> $\color{green}\textsf{2026-09-01}$ </sup>  |
| $\color{blue}\textsf{NOTE}$ Changes in commands, functions or functions by Respawn could remove/disable certain configurations. I will periodically verify whether the settings are still workinng | <sup> Periodically </sup> |

</div>
<br>

<div id="Context">

## Context

This repo contains multiple files that can be used to improve the stability and performance for Apex Legends, it has been created over a number of years by collecting and trying possibilities. For some, there might be no new settings and for others it might be exactly what they were missing.</p>

This configuration has been created using my own rig, please keep in mind that you should make sure it is compatible with your pc. 

If you are unsure whether settings are fit for your machine and/or you are experiencing unexpected stability issues, feel free to discuss on this repository in the [discussions](https://github.com/DominicKlmNL/apex-legends-config/discussions) section. I will try to help as much as I can. </p>
<br>

| Component | Type | Note |
| --- | :--- | :--- |
| CPU | AMD Ryzen 9 3900X | |
| GPU | MSI Geforce RTX 3060 | 12GB |
| Motherboard | Asrock B550 Phantom Gaming 4 | AM4 Socket |
| Memory(RAM) | Corsair Vengeance LPX | 64GB 3600-18 DDR4 |
| Mouse | Keychron M3-A1 Wireless | 1000hz 2.4Ghz |
| Keyboard | Keychron K10 Max | G-mode / Cabled |
| Headset | HyperX Cloud Alpha Wireless | |

</div>
<br>

<div id="Files">

## Files

| File | Purpose |
| --- | :--- |
| [Launch options](https://github.com/DominicKlmNL/apex-legends-config/blob/main/launchoptions.md) | A number of commands that can be used as launch options in Steam, to start Apex Legends with additional configuration |
| [In-game settings](https://github.com/DominicKlmNL/apex-legends-config/blob/main/ingame.md) | All the Display and Advanced Video in-game settings for Apex Legends optimized with these supporting config files |
| [autoexec.cfg](https://github.com/DominicKlmNL/apex-legends-config/blob/main/autoexec.cfg) | Configuration file that can be loaded into Apex Legends when starting the game |
| [videoconfig.txt](https://github.com/DominicKlmNL/apex-legends-config/blob/main/videoconfig.txt) | Apex Legends native file, can be used to optimize game settings |
| [Nvidia settings](https://github.com/DominicKlmNL/apex-legends-config/blob/main/nvidia-settings.md) | Settings for Nvidia Control Panel, that will help to optimize your game beyond just the game |

<br>
</div>


<div id="Installation">

## Installation
Download the files from [here](https://github.com/DominicKlmNL/apex-legends-config/archive/refs/heads/main.zip), extract the files from the ZIP onto your machine. Each file requires a different location, so per file an instruction is available.

<br>

## Launch options

Follow the extended instructions on the [Steam Apex Legends Launch options](https://github.com/DominicKlmNL/apex-legends-config/blob/main/launchoptions.md) page.

<br>

## Apex Legends In-game settings

Follow the extended instructions on the [Apex Legends in-game settings](https://github.com/DominicKlmNL/apex-legends-config/blob/main/ingame.md) page.

</div>
<br>

## Autoexec.cfg

> [!IMPORTANT]
>  Make sure there is no existing autoexec.cfg or make sure to backup the old file and rename it.

1. Copy the [autoexec.cfg](https://github.com/DominicKlmNL/apex-legends-config/blob/main/autoexec.cfg) from the folder where you extracted the files
2. Open Steam and go to your Library tab
3. Right+click Apex Legends and go to <b>Manage</b> in the dropdown and click <b>"Browse Local Files"</b>
4. This will open your Apex installed folder, open the <b>*cfg*</b> folder
5. Paste the <b>autoexec.cfg</b> file here
<br>

## Videoconfig.txt
1. Make sure Apex Legends is not running while configuring this file
2. Copy the [videoconfig.txt](https://github.com/DominicKlmNL/apex-legends-config/blob/main/videoconfig.txt) from the folder where you extracted the files
3. Open Windows Explorer and go to <b> C:\Users\ YOUR USERNAME \Saved Games\Respawn\Apex\local</b>
4. Rename the existing <b>videoconfig.txt</b> to something like <b>videoconfig.old.txt</b> & keep that as your backup file .
5. Paste the <b>videoconfig.txt</b> from the downloaded and extracted files here.
6. Right+click the videoconfig.txt file and click on <b>Properties</b>.
7. At the bottom there are 2 checkboxes next to the word $\color{green}\textsf{Attributes}$ , check the box with the name $\color{green}\textsf{Read-Only}$.
8. Click on the <b>Apply</b> button and after that click on <b>OK</b>. 
9. You can now start Apex Legends again and start playing
<br>

## NVIDIA settings

> [!CAUTION]
> These settings only work on computers with NVIDIA videocards and use the NVIDIA Control Panel to configure the videocard.

Follow the extended instructions on the [Nvidia Settings](https://github.com/DominicKlmNL/apex-legends-config/blob/main/nvidia-settings.md) page

<p> $\color{blue}\textsf{NOTE}$ Currently not working on AMD settings, but if I get the chance this might be added. </p>
<br>

<div id="CHANGELOG" align="left">

## CHANGELOG

For the version history and changelog, see [changelog](./docs/CHANGELOG.md) file for details. </p>
Changes to README or LICENSE are not added each time, as they server as a guideline and instruction. </P>

</div>
<br>

<div id="License" align="left">

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

</div>
<br>

<div align="center">
<br>

[Back to Top](#Top)

</div>
