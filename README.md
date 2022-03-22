Pawn Simulator written in ionic5
---

## Installation

Environment: ionic, cordova
(App is using latest stable version of angular)


Note: Please check the screenshot of running app in the root of source-code.

Clone this Repo

> \$ git clone 

In root of the app run npm install

> \$ npm i

---

Use following commands to make prod builds

```
> npm run build-ios
> npm run build-android
> npm run build
```
---

Test cases.
> added basic tests for chess board for render table and pawn moves.

## Usage

Run the program from the app root. App has been designed with consideration of desktop and tablet view.

> \$ ionic serve

| Commands    | Description                                                                                                      |
| ----------- | ---------------------------------------------------------------------------------------------------------------- |
| PLACE X Y F | Place the pawn on the table at coordinates x,y and facing the direction f. Valid x andy values are between 0-4. |

Valid directions are WEST, NORTH, EAST, SOUTH. Example Input: "PLACE 0 0 NORTH"
MOVE | Move the pawn forward 1 step in the direction it is facing.
LEFT | Turn the pawn's direction 90 degress to the left. I.e. if the pawn is facing NORTH, 1 left turn will turn the pawn's direction to WEST.
RIGHT | Turn the pawn's direction 90 degress to the right. I.e. if the pawn is facing NORTH, 1 left turn will turn the pawn's direction to EAST.
REPORT | Output the current position of the pawn. Example Output: "Output: 4, 0, EAST"

---

Create an application that can read in commands of the following form - PLACE X Y F | MOVE | LEFT | RIGHT | REPORT

**Description**

- The application is a simulation of a pawn moving on a square tabletop, of
  dimensions 5 units x 5 units.

- There are no other obstructions on the table surface.

- The pawn is free to roam around the surface of the table, but must be prevented from
  falling to destruction. Any movement that would result in the pawn falling from the
  table must be prevented, however further valid movement commands must still be
  allowed.

- Create an application that can read in commands of the following form:
  ○ PLACE X,Y,F
  ○ MOVE
  ○ LEFT
  ○ RIGHT
  ○ REPORT

- PLACE will put the pawn on the table in position X,Y and facing NORTH, SOUTH,
  EAST or WEST.

- The origin (0,0) can be considered to be the SOUTH WEST most corner.
- The first valid command to the pawn is a PLACE command, after that, any sequence
  of commands may be issued, in any order, including another PLACE command. The
  application should discard all commands in the sequence until a valid PLACE
  command has been executed.
- MOVE will move the pawn one unit forward in the direction it is currently facing.
- MOVE will move the Pawn one unit forward in the direction it is currently facing.
- REPORT will announce the X,Y and F of the pawn. This can be in any form, but
  standard output is sufficient.
- A pawn that is not on the table can choose the ignore the MOVE, LEFT, RIGHT and
  REPORT commands.
- Input can be from a file, from standard input or through a UI with four buttons and
  scrolling log of the result, as the developer chooses. (This might depend on the dev
  stack you use)
- Provide test data to exercise the application.

### Constraints

The pawn must not fall off the table during movement. This also includes the
initial placement of the pawn.

Any move that would cause the pawn to fall must be ignored.

Example Input and Output:

i.

```
> PLACE 0 0 NORTH
> MOVE
> REPORT
> Output: 0,1,NORTH

```

ii.

```
> PLACE 0 0 NORTH
> LEFT
> REPORT
> Output: 0,0,WEST
```

iii.

```
> PLACE 1 2 EAST
> MOVE
> MOVE
> LEFT
> MOVE
> REPORT
> Output: 3,3,NORTH
```


* Coding practices used in the app.
```
 > Added and use reusable CSS variables
 > Lazily loaded modules
 > Split code into several parts
 > Optimized code
 > Used eslint
 > Clean and formatted code with no consoles and unused code.
 > Added short commands to run and make app builds
 > Managed the code in a way so that can be easily readable and understandable.
 > Added comments where required.
 > Used typescript maximum I can.
```

