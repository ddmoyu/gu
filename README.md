## gu

switch git user, support local and global.(切换 git 用户，支持本地和全局)

### Command  \ 指令

#### `ls`
List all users. \ 列出所有用户。
```bash
gu ls
```

#### `add`
Add user. \ 添加用户。
```bash
gu add moyu daydaymoyu@gmail.com
```


#### `rm`
Remove user. \ 删除用户。
```bash
gu rm 0

gu rm 2 -i

gu rm moyu -n
```

#### `use`
Use this user. \ 设置该用户为当前仓库用户。
```bash
gu use 0

gu use 2 -i

gu use moyu -n
```

### Options \ 设置

#### `-i`
use this id. \  使用该 id。
```bash
gu rm 2 -i

gu use 2 -i
```

#### `-n`
use this name. \ 使用该用户名。
```bash
gu rm moyu -n

gu use moyu -n
```

#### `-g`
set the user as global user. \ 设置该用户为全局仓库用户。
```bash
gu use 0 -g

gu use moyu -n -g
```

#### `-l`
set the user as local user. \ 设置该用户为当前仓库用户。
```bash
gu use 0 -l

gu use moyu -n -l
```
