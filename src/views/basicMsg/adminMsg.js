// 系统管理数据
import newBtn from '@/components/public/newBtn';
import editBtn from '@/components/public/editBtn';
import deleteBtn from '@/components/public/deleteBtn';
import pauseBtn from '@/components/public/pauseBtn';
import renewBtn from '@/components/public/renewBtn';
import runNowBtn from '@/components/public/runNowBtn';
import logListBtn from '@/components/public/logListBtn';
import uploadBtn from '@/components/public/uploadBtn';
import configBtn from '@/components/public/configBtn';
import backBtn from '@/components/public/backBtn';

import getAsyncData from '@/util/getDataFn'
export default {
    adminManage: [{ 
        key: 'adminManage',
        url: 'user',
        tab: '管理员管理',
        theads: ['用户ID', '用户名', '所属部门', '邮箱', '手机号', '状态', '创建时间 '],
        props: ['date', 'name', 'address', 'email', 'phone', 'tags', 'time'],
        searchInput: {
            placeholder: '用户名'
        },
        typeComponent: [{
            components: newBtn
        }, {
            components: editBtn
        }, {
            components: deleteBtn
        }],
        newComponent: [{
                type: 'text',
                label: '用户名',
                name: 'username',
                placeholder: '登录账号',
                rules: [{
                    required: true,
                    message: 'Please input your note!'
                }],
                inputType: 'text'
            },
            {
                type: 'tree',
                label: '所属部门',
                name: 'depart',
                placeholder: '所属部门',
                treeData: []
            },
            {
                type: 'text',
                label: '密码',
                name: 'password',
                placeholder: '密码',
                rules: [{
                    required: true,
                    message: 'Please input your password!'
                }],
                inputType: 'password'
            }, {
                type: 'text',
                label: '邮箱',
                name: 'email',
                placeholder: '邮箱',
                rules: [{
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                }, {
                    required: true,
                    message: 'Please input your E-mail!',
                }],
                inputType: 'password'
            }, {
                type: 'text',
                label: '手机号',
                name: 'phone',
                placeholder: '手机号',
                rules: [{
                    required: true,
                    message: 'Please input your phone!',
                }],
                inputType: 'text'
            },
            {
                type: 'checkbox',
                label: '角色',
                name: 'role',
                desc: '运营',
                rules: [{
                    required: true,
                    message: 'Please input your phone!',
                }],
            },
            {
                type: 'radio',
                label: '状态',
                radioComponents: [{
                    value: '禁用',
                    desc: '禁用'
                }, {
                    value: '正常',
                    desc: '正常'
                }],
                name: 'state'
            }
        ],
        editComponent: [{
                type: 'text',
                label: '用户名',
                name: 'username',
                placeholder: '登录账号',
                rules: [{
                    required: true,
                    message: 'Please input your note!'
                }],
                inputType: 'text'
            },
            {
                type: 'tree',
                label: '所属部门',
                name: 'depart',
                placeholder: '所属部门',
                treeData: []
            },
            {
                type: 'text',
                label: '密码',
                name: 'password',
                placeholder: '密码',
                rules: [{
                    required: true,
                    message: 'Please input your password!'
                }],
                inputType: 'password'
            }, {
                type: 'text',
                label: '邮箱',
                name: 'email',
                placeholder: '邮箱',
                rules: [{
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                }, {
                    required: true,
                    message: 'Please input your E-mail!',
                }],
                inputType: 'password'
            }, {
                type: 'text',
                label: '手机号',
                name: 'phone',
                placeholder: '手机号',
                rules: [{
                    required: true,
                    message: 'Please input your phone!',
                }],
                inputType: 'text'
            },
            {
                type: 'checkbox',
                label: '角色',
                name: 'role',
                desc: '运营',
                rules: [{
                    required: true,
                    message: 'Please input your phone!',
                }],
            },
            {
                type: 'radio',
                label: '状态',
                radioComponents: [{
                    value: '禁用',
                    desc: '禁用'
                }, {
                    value: '正常',
                    desc: '正常'
                }],
                name: 'state'
            }
        ],
    }],
    departmentManage: [{
        key: 'departmentManage',
        tab: '部门管理',
        url: 'dept',
        theads: ['部门ID', '部门名称', '上级部门', '排序号'],
        props: ['deptId', 'name', 'parentName', 'orderNum'],
        typeComponent: [{
            components: newBtn
        }, {
            components: editBtn
        }, {
            components: deleteBtn
        }],
        newComponent: [{
                type: 'text',
                label: '部门名称',
                name: 'name',
                placeholder: '部门名称',
                rules: [{
                    required: true,
                    message: '请输入部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'tree',
                label: '上级部门',
                name: 'parentId',
                placeholder: '上级部门',
                parentName: 'parentName',
                treeData: getAsyncData.getDeptData()
            },
            {
                type: 'num',
                label: '排序号',
                name: 'orderNum',
                placeholder: '排序号'
            }
        ],
        editComponent: [{
                type: 'text',
                label: '部门名称',
                name: 'name',
                placeholder: '部门名称',
                rules: [{
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'tree',
                label: '上级部门',
                name: 'parentName',
                placeholder: '上级部门',
                treeData: []
            },
            {
                type: 'num',
                label: '排序号',
                name: 'orderNum',
                placeholder: '排序号'
            }
        ],
    }],
    roleManage: [{
        key: 'roleManage',
        tab: '角色管理',
        url: 'role',
        theads: ['角色ID', '角色名称', '所属部门', '备注', '创建时间'],
        props: ['roleId', 'roleName', 'deptName', 'memo', 'createTime'],
        typeComponent: [{
            components: newBtn
        }, {
            components: editBtn
        }, {
            components: deleteBtn
        }],
        searchInput: {
            placeholder: '角色名称'
        },
        newComponent: [{
                type: 'text',
                label: '角色名称',
                name: 'username',
                placeholder: '角色名称',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'tree',
                label: '所属部门',
                name: 'depart',
                placeholder: '所属部门',
                treeData: []
            },
            {
                type: 'text',
                label: '备注',
                name: 'memo',
                placeholder: '备注',
                inputType: 'text'
            },
        ],
        editComponent: [{
                type: 'text',
                label: '角色名称',
                name: 'username',
                placeholder: '角色名称',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'tree',
                label: '所属部门',
                name: 'depart',
                placeholder: '所属部门',
                treeData: []
            },
            {
                type: 'text',
                label: '备注',
                name: 'memo',
                placeholder: '备注',
                inputType: 'text'
            },
        ],
    }],
    menuManage: [{
        key: 'menuManage',
        tab: '菜单管理',
        theads: ['菜单ID', '菜单名称', '上级菜单', '图标', '类型', '排序号', '菜单URL', '授权标识'],
        props: ['date', 'name', 'address'],
        typeComponent: [{
            components: newBtn
        }, {
            components: editBtn
        }, {
            components: deleteBtn
        }],
        newComponent: [{
                type: 'radio',
                label: '类型',
                radioComponents: [{
                        value: '目录',
                        desc: '目录'
                    }, {
                        value: '菜单',
                        desc: '菜单'
                    },
                    {
                        value: '按钮',
                        desc: '按钮'
                    }
                ],
                name: 'state'
            },
            {
                type: 'text',
                label: '菜单名称',
                name: 'departname',
                placeholder: '菜单名称或按钮名称',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'tree',
                label: '上级菜单',
                name: 'depart',
                placeholder: '一级菜单',
                treeData: []
            },
            {
                type: 'text',
                label: '菜单URL',
                name: 'memo',
                placeholder: '菜单URL',
                inputType: 'text'
            },
            {
                type: 'text',
                label: '授权标识',
                name: 'memo',
                placeholder: '多个用逗号分隔，如：user:list,user:create',
                inputType: 'text'
            },
            {
                type: 'num',
                label: '排序号',
                name: 'state',
                placeholder: '排序号'
            },
            {
                type: 'text',
                label: '图标',
                name: 'memo',
                placeholder: '菜单图标',
                inputType: 'text'
            },
        ],
        editComponent: [{
                type: 'radio',
                label: '类型',
                radioComponents: [{
                        value: '目录',
                        desc: '目录'
                    }, {
                        value: '菜单',
                        desc: '菜单'
                    },
                    {
                        value: '按钮',
                        desc: '按钮'
                    }
                ],
                name: 'state'
            },
            {
                type: 'text',
                label: '菜单名称',
                name: 'departname',
                placeholder: '菜单名称或按钮名称',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'tree',
                label: '上级菜单',
                name: 'depart',
                placeholder: '一级菜单',
                treeData: []
            },
            {
                type: 'text',
                label: '菜单URL',
                name: 'memo',
                placeholder: '菜单URL',
                inputType: 'text'
            },
            {
                type: 'text',
                label: '授权标识',
                name: 'memo',
                placeholder: '多个用逗号分隔，如：user:list,user:create',
                inputType: 'text'
            },
            {
                type: 'num',
                label: '排序号',
                name: 'state',
                placeholder: '排序号'
            },
            {
                type: 'text',
                label: '图标',
                name: 'memo',
                placeholder: '菜单图标',
                inputType: 'text'
            },
        ],
    }],
    taskManage: [{
        key: 'taskManage',
        tab: '定时任务',
        theads: ['任务ID', 'bean名称', '方法名称', '参数', 'cron表达式', '备注', '状态'],
        props: ['date', 'name', 'address'],
        typeComponent: [{
            components: newBtn
        }, {
            components: editBtn
        }, {
            components: deleteBtn
        }, {
            components: pauseBtn
        }, {
            components: renewBtn
        }, {
            components: runNowBtn
        }, {
            components: logListBtn
        }],
        searchInput: {
            placeholder: 'bean名称'
        },
        newComponent: [{
                type: 'text',
                label: 'bean名称',
                name: 'departname',
                placeholder: 'bean名称',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '方法名称',
                name: 'departname',
                placeholder: 'bea方法名称n名称',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '参数',
                name: 'departname',
                placeholder: '参数',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: 'cron表达式',
                name: 'memo',
                placeholder: 'cron表达式',
                inputType: 'text'
            },
            {
                type: 'text',
                label: '备注',
                name: 'memo',
                placeholder: '备注',
                inputType: 'text'
            },
        ],
        editComponent: [{
                type: 'text',
                label: 'bean名称',
                name: 'departname',
                placeholder: 'bean名称',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '方法名称',
                name: 'departname',
                placeholder: 'bea方法名称n名称',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '参数',
                name: 'departname',
                placeholder: '参数',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: 'cron表达式',
                name: 'memo',
                placeholder: 'cron表达式',
                inputType: 'text'
            },
            {
                type: 'text',
                label: '备注',
                name: 'memo',
                placeholder: '备注',
                inputType: 'text'
            },
        ],
    }],
    logList: [{
        key: 'logList',
        tab: '定时任务',
        theads: ['日志ID', '任务ID', 'bean名称', '方法名称', '参数', '状态', '耗时(单位：毫秒)', '执行时间'],
        props: ['date', 'name', 'address'],
        searchInput: {
            placeholder: '任务ID'
        },
        typeComponent: [{
            components: backBtn
        }],
    }],
    paramsManage: [{
        key: 'paramsManage',
        tab: '参数管理',
        theads: ['ID', '参数名', '参数值', '备注'],
        props: ['date', 'name', 'address'],
        typeComponent: [{
            components: newBtn
        }, {
            components: editBtn
        }, {
            components: deleteBtn
        }],
        searchInput: {
            placeholder: '参数名'
        },
        newComponent: [{
                type: 'text',
                label: '参数名',
                name: 'departname',
                placeholder: '参数名',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '参数值',
                name: 'departname',
                placeholder: '参数值',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '备注',
                name: 'departname',
                placeholder: '备注',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            }
        ],
        editComponent: [{
                type: 'text',
                label: '参数名',
                name: 'departname',
                placeholder: '参数名',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '参数值',
                name: 'departname',
                placeholder: '参数值',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '备注',
                name: 'departname',
                placeholder: '备注',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            }
        ],
    }],
    fileUploadManage: [{
        key: 'fileUploadManage',
        tab: '文件上传',
        theads: ['ID', 'URL地址', '创建时间'],
        props: ['date', 'name', 'address'],
        typeComponent: [{
            components: configBtn
        }, {
            components: uploadBtn,
            params: {
                uploadAction: '//jsonplaceholder.typicode.com/posts/'
            }
        }, {
            components: deleteBtn
        }],
        searchInput: {
            placeholder: '参数名'
        },
    }],
    dictionaryManage: [{
        key: 'dictionaryManage',
        tab: '字典管理',
        theads: ['字典名称', '字典类型', '字典码', '字典值', '排序', '备注'],
        props: ['date', 'name', 'address'],
        typeComponent: [{
            components: newBtn
        }, {
            components: editBtn
        }, {
            components: deleteBtn
        }],
        searchInput: {
            placeholder: '字典名称'
        },
        newComponent: [{
                type: 'text',
                label: '字典名称',
                name: 'departname',
                placeholder: '字典名称',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '字典类型',
                name: 'departname',
                placeholder: '字典类型',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '字典码',
                name: 'departname',
                placeholder: '字典码',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '字典值',
                name: 'departname',
                placeholder: '字典值',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '排序',
                name: 'departname',
                placeholder: '排序',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '备注',
                name: 'departname',
                placeholder: '备注',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            }
        ],
        editComponent: [{
                type: 'text',
                label: '字典名称',
                name: 'departname',
                placeholder: '字典名称',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '字典类型',
                name: 'departname',
                placeholder: '字典类型',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '字典码',
                name: 'departname',
                placeholder: '字典码',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '字典值',
                name: 'departname',
                placeholder: '字典值',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '排序',
                name: 'departname',
                placeholder: '排序',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '备注',
                name: 'departname',
                placeholder: '备注',
                rules: [{
                    required: true,
                    message: 'Please input your 部门名称!'
                }],
                inputType: 'text'
            }
        ],
    }],
    SystemLog: [{
        key: 'SystemLog',
        tab: '系统日志',
        theads: ['id', '用户名', '用户操作', '请求方法', '请求参数', '执行时长(毫秒)', 'IP地址', '创建时间'],
        props: ['date', 'name', 'address'],
        searchInput: {
            placeholder: '用户名、用户操作'
        },
    }],
}