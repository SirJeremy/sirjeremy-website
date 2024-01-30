# Rust Crossbreed Calculator

<img src="/pics/rcbc.png" alt="Screenshot of 3 program windows. The first window, 'Crosbreed Calculator', lets you select and crossbreed deifferent breed. The second window, 'Breed Information' shows the parents, children, and genration of a specified breed. The third window, 'History' shows the history of various actions made, like adding breed or created crossbreeds." class="md-img-center"/>

Rust Crossbreed Calculator is a simple program that assists in the in-game crossbreed process. Rust features a crossbreeding system for adjusting the genes of plants. When done manually, this process is very time consuming. This program greatly sped up the process by calculating the resulting breed for you.

At the time of release, this was the 2nd program of it's kind and the only one that kept a list of created breeds, which allowed for much more practical use. It was also the only program at the time that allowed for multi-generation crossbreeding, as opposed to only having a single generation where you could not track how to produce a specific breed if you forgot.

Made using WPF, this program features three different windows a calculator, breed inspector, and crossbreed history. The main 'Crossbreed Calculator' window allows you to enter a breed with text input, which is made up of a combination of 6 genes chosen from 5 possible genes. The resulting breed gets added to a list of breeds along with a geneartion number. From the list of breeds, you can select which ones you want to crossbreed. The program then automatically calculates all possible crossbreeds and displays them in the output, which you can choose to save back to your breed pool.

The 'History' window shows what actions you have recently made, such as new breeds added, new crossbreeds made, and deleted breeds. The 'Breed Information' window shows a breeds generation, parents, and children. This allows you to figure out which breeds you would need to crossbreed in the actual game.