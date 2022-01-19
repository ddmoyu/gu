# gs

switch git user, support local and global.(切换 git 用户，支持本地和全局)

## Usage \ 使用
```bash
npm i -g @ddmoyu/gs
gs COMMAND
```

## Commands \ 命令

* `gs ls`
* `gs add`
* `gs rm`
* `gs use`

## `gs ls`
```
USAGE
 $ gs ls

DESCRIPTION
 list all users.  

EXAMPLES
 $ gs ls
  ╔═════════════════════════════════════════════════╗
  ║                  Git user list                  ║
  ╟────┬───────────┬──────────────────────┬─────────╢
  ║ ID │      Name │                Email │ Current ║
  ╟────┼───────────┼──────────────────────┼─────────╢
  ║ 0  │      moyu │ daydaymoyu@gmail.com │    √    ║
  ╟────┼───────────┼──────────────────────┼─────────╢
  ║ 1  │     dayday│ daydaymoyu@gmail.com │         ║
  ╚════╧═══════════╧══════════════════════╧═════════╝
```

## `gs add`
```
USAGE
 $ gs add

DESCRIPTION
 Add user.  

EXAMPLES
 $ gs add moyu daydaymoyu@gmail.com

 // Add moyu successfull!
```

## `gs rm`
```bash
USAGE
 $ gs rm

DESCRIPTION
 remove user.

EXAMPLES
 $ gs rm 0
 // or
 $ gs rm moyu

 // remove moyu successfull!
```

## `gs use`
```txt
USAGE
 $ gs use

DESCRIPTION
 use this user.

FLAGS
  -l   set the user as local user.(Default) \ 设置该用户为当前仓库用户。 
  -g   set the user as global user. \ 设置该用户为全局仓库用户。

EXAMPLES
 $ gs use 0 -l
 // or
 $ gs use moyu -g

 // use moyu successfull!
```

开发：
```bash
yarn dev
yarn dev ls

// or

./bin/dev
./bin/dev ls
```
