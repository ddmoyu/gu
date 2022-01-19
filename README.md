# gu

switch git user, support local and global.(切换 git 用户，支持本地和全局)

## Usage \ 使用
```bash
npm i -g @ddmoyu/gu
gu COMMAND
```

## Commands \ 命令

* `gu ls`
* `gu add`
* `gu rm`
* `gu use`

## `gu ls`
```
USAGE
 $ gu ls

DESCRIPTION
 list all users.  

EXAMPLES
 $ gu ls
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

## `gu add`
```
USAGE
 $ gu add

DESCRIPTION
 Add user.  

EXAMPLES
 $ gu add moyu daydaymoyu@gmail.com

 // Add moyu successfull!
```

## `gu rm`
```bash
USAGE
 $ gu rm

DESCRIPTION
 remove user.

EXAMPLES
 $ gu rm 0
 // or
 $ gu rm moyu

 // remove moyu successfull!
```

## `gu use`
```txt
USAGE
 $ gu use

DESCRIPTION
 use this user.

FLAGS
  -l   set the user as local user.(Default) \ 设置该用户为当前仓库用户。 
  -g   set the user as global user. \ 设置该用户为全局仓库用户。

EXAMPLES
 $ gu use 0 -l
 // or
 $ gu use moyu -g

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
