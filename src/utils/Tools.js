export const expandNode = (nodes, targetKey, newChildren) => {
  return nodes.map(node => {
    if (node.key === targetKey) {
      return {
        ...node,
        children: newChildren,
      }
    } else if (node.children) {
      return {
        ...node,
        children: expandNode(node.children, targetKey, newChildren),
      }
    } else {
      return node
    }
  })
}
// 删除本地node
export const removeNode = (treeData, key) => {
  return treeData.filter(node => node.key !== key).map(node => {
    if (node.children) {
      return {...node, children: removeNode(node.children, key)}
    } else {
      return {...node}
    }
  })
}
// 更新 node
export const renameNode = (treeData, key, newTitle) => {
  return treeData.map(node => {
    if (node.key === key) {
      // Find the node and update its title
      return {...node, title: newTitle}
    } else if (node.children) {
      // Continue the search in children nodes
      return {...node, children: renameNode(node.children, key, newTitle)}
    } else {
      return {...node}
    }
  })
}

// 更新目录
export const addDirectory = (treeData, path, newDirectory) => {
  return treeData.map(node => {
    if (node.fullPath === path) {
      return {...node, children: [...node.children, newDirectory]}
    }
    if (node.children) {
      return {...node, children: addDirectory(node.children, path, newDirectory)}
    } else {
      return {...node}
    }
  })
}

const isWindows = navigator.platform.startsWith('Win')
export const pathSeparator = isWindows ? '\\' : '/'

export function updatePath(newPath, oldPath) {
  let pathParts = oldPath.split(pathSeparator)
  pathParts.pop()
  pathParts.push(newPath)
  return pathParts.join(pathSeparator)
}

export function addANewDirectory(newPath, oldPath) {
  let pathParts = oldPath.split(pathSeparator)
  pathParts.push(newPath)
  return pathParts.join(pathSeparator)
}

export function processTreeData(data) {
  return data.map(node => {
    let newNode = {...node}
    if (node.levelOne) {
      newNode.className = 'levelOne'
    }
    if (node.children) {
      newNode.children = processTreeData(node.children)
    }
    return newNode
  })
}

export function convertToForwardSlash(path) {
  return path.replace(/\\/g, '/');
}
