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
import validate from '@/util/validate'

export default {
    adminManage: [{
        key: 'adminManage',
        url: 'dept',
        tag: 'user',
        tab: '管理员管理',
        theads: ['用户ID', '用户名', '所属部门', '邮箱', '手机号', '状态', '创建时间 '],
        props: ['userId', 'username', 'deptName', 'email', 'mobile', 'status', 'createTime'],
        searchInput: {
            placeholder: '用户名',
            searchName: 'userName'
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
                    message: '请输入用户名!'
                }],
                inputType: 'text'
            },
            {
                type: 'treeSelect',
                label: '所属部门',
                name: 'deptId',
                placeholder: '所属部门',
                urlParam: 'dept',
                rules: [{
                    required: true,
                    message: '请选择所属部门!'
                }],
            },
            {
                type: 'text',
                label: '密码',
                name: 'password',
                placeholder: '密码',
                rules: [{
                    required: true,
                    message: '请输入密码!'
                }],
                inputType: 'password'
            },
            {
                type: 'text',
                label: '邮箱',
                name: 'email',
                placeholder: '邮箱',
                rules: [{
                    type: 'email',
                    message: '请输入正确邮箱!',
                }, {
                    required: true,
                    message: '请输入邮箱!',
                }],
                inputType: 'text'
            }, {
                type: 'text',
                label: '手机号',
                name: 'mobile',
                placeholder: '手机号',
                inputType: 'text',
                rules: [{
                    validator: validate.phone
                }, {
                    required: true
                }]
            },
            {
                type: 'checkbox',
                label: '角色',
                name: 'roleIdList',
                checkboxComponents: [{
                    value: 1,
                    desc: '运营'
                }]
            },
            {
                type: 'radio',
                label: '状态',
                radioComponents: [{
                    value: '0',
                    desc: '禁用'
                }, {
                    value: '1',
                    desc: '正常'
                }],
                name: 'status'
            }
        ],
        editComponent: [{
                type: 'text',
                label: '用户名',
                name: 'username',
                placeholder: '登录账号',
                rules: [{
                    required: true,
                    message: '请输入用户名!'
                }],
                inputType: 'text'
            },
            {
                type: 'treeSelect',
                label: '所属部门',
                name: 'deptId',
                placeholder: '所属部门',
                urlParam: 'dept',
                rules: [{
                    required: true,
                    message: '请选择所属部门!'
                }],
            },
            {
                type: 'text',
                label: '密码',
                name: 'password',
                placeholder: '密码',
                rules: [{
                    required: true,
                    message: '请输入密码!'
                }],
                inputType: 'password'
            }, {
                type: 'text',
                label: '邮箱',
                name: 'email',
                placeholder: '邮箱',
                rules: [{
                    type: 'email',
                    message: '请输入正确邮箱!',
                }, {
                    required: true,
                    message: '请输入邮箱!',
                }],
                inputType: 'password'
            }, {
                type: 'text',
                label: '手机号',
                name: 'mobile',
                placeholder: '手机号',
                inputType: 'text',
            },
            {
                type: 'checkbox',
                label: '角色',
                name: 'roleIdList',
                checkboxComponents: [{
                    value: 1,
                    desc: '运营'
                }]
            },
            {
                type: 'radio',
                label: '状态',
                radioComponents: [{
                    value: '0',
                    desc: '禁用'
                }, {
                    value: '1',
                    desc: '正常'
                }],
                name: 'status'
            }
        ],
    }],
    departmentManage: [{
        key: 'departmentManage',
        tab: '部门管理',
        tag: 'dept',
        url: 'sys/dept/list/v2',
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
                inputType: 'text'
            },
            {
                type: 'treeSelect',
                label: '上级部门',
                name: 'parentId',
                placeholder: '上级部门',
                urlParam: 'dept'
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
                inputType: 'text'
            },
            {
                type: 'treeSelect',
                label: '上级部门',
                name: 'parentId',
                placeholder: '上级部门',
                urlParam: 'dept'
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
        tag: 'role',
        theads: ['角色ID', '角色名称', '所属部门', '备注', '创建时间'],
        props: ['roleId', 'roleName', 'deptName', 'remark', 'createTime'],
        typeComponent: [{
            components: newBtn
        }, {
            components: editBtn
        }, {
            components: deleteBtn
        }],
        searchInput: {
            placeholder: '角色名称',
            searchName: 'roleName'
        },
        newComponent: [{
                type: 'text',
                label: '角色名称',
                name: 'roleName',
                placeholder: '角色名称',
                inputType: 'text'
            },
            {
                type: 'treeSelect',
                label: '所属部门',
                name: 'deptId',
                placeholder: '所属部门',
                urlParam: 'dept'
            },
            {
                type: 'text',
                label: '备注',
                name: 'remark',
                placeholder: '备注',
                inputType: 'text'
            },
            {
                type: 'tree',
                label: '功能权限',
                name: 'menuIdList',
                belong: 'menu'
            },
            {
                type: 'tree',
                label: '数据权限',
                name: 'deptIdList',
                belong: 'dept'
            },
        ],
        editComponent: [{
                type: 'text',
                label: '角色名称',
                name: 'roleName',
                placeholder: '角色名称',
                inputType: 'text'
            },
            {
                type: 'treeSelect',
                label: '所属部门',
                name: 'deptId',
                placeholder: '所属部门',
                urlParam: 'dept'
            },
            {
                type: 'text',
                label: '备注',
                name: 'remark',
                placeholder: '备注',
                inputType: 'text'
            },
            {
                type: 'tree',
                label: '功能权限',
                name: 'menuIdList',
                belong: 'menu'
            },
            {
                type: 'tree',
                label: '数据权限',
                name: 'deptIdList',
                belong: 'dept'
            },
        ],
    }],
    menuManage: [{
        key: 'menuManage',
        tab: '菜单管理',
        tag: 'menu',
        url: 'sys/menu/listV2',
        theads: ['菜单ID', '菜单名称', '上级菜单', '图标', '类型', '排序号', '菜单URL', '授权标识'],
        props: ['menuId', 'name', 'parentName', 'icon', 'type', 'orderNum', 'url', 'perms'],
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
                        value: '0',
                        desc: '目录'
                    }, {
                        value: '1',
                        desc: '菜单'
                    },
                    {
                        value: '2',
                        desc: '按钮'
                    }
                ],
                name: 'type'
            },
            {
                type: 'text',
                label: '菜单名称',
                name: 'name',
                placeholder: '菜单名称或按钮名称',
                rules: [{
                    required: true,
                    message: '请输入菜单名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'treeSelect',
                label: '上级菜单',
                name: 'parentId',
                placeholder: '一级菜单',
                urlParam: 'menu',
                url: 'sys/menu/selectV2',
                rules: [{
                    required: true,
                    message: '请选择上级菜单!'
                }],
            },
            {
                type: 'text',
                label: '菜单URL',
                name: 'url',
                placeholder: '菜单URL',
                inputType: 'text'
            },
            {
                type: 'text',
                label: '授权标识',
                name: 'perms',
                placeholder: '多个用逗号分隔，如：user:list,user:create',
                inputType: 'text'
            },
            {
                type: 'num',
                label: '排序号',
                name: 'orderNum',
                placeholder: '排序号'
            },
            {
                type: 'text',
                label: '图标',
                name: 'icon',
                placeholder: '菜单图标',
                inputType: 'text'
            },
        ],
        editComponent: [{
                type: 'radio',
                label: '类型',
                radioComponents: [{
                        value: '0',
                        desc: '目录'
                    }, {
                        value: '1',
                        desc: '菜单'
                    },
                    {
                        value: '2',
                        desc: '按钮'
                    }
                ],
                name: 'type'
            },
            {
                type: 'text',
                label: '菜单名称',
                name: 'name',
                placeholder: '菜单名称或按钮名称',
                rules: [{
                    required: true,
                    message: '请输入菜单名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'treeSelect',
                label: '上级菜单',
                name: 'parentId',
                placeholder: '一级菜单',
                urlParam: 'menu',
                url: 'sys/menu/selectV2',
                rules: [{
                    required: true,
                    message: '请选择上级菜单!'
                }],
            },
            {
                type: 'text',
                label: '菜单URL',
                name: 'url',
                placeholder: '菜单URL',
                inputType: 'text'
            },
            {
                type: 'text',
                label: '授权标识',
                name: 'perms',
                placeholder: '多个用逗号分隔，如：user:list,user:create',
                inputType: 'text'
            },
            {
                type: 'num',
                label: '排序号',
                name: 'orderNum',
                placeholder: '排序号'
            },
            {
                type: 'text',
                label: '图标',
                name: 'icon',
                placeholder: '菜单图标',
                inputType: 'text'
            },
        ],
    }],
    taskManage: [{
        tag: 'schedule',
        key: 'taskManage',
        tab: '定时任务',
        theads: ['任务ID', 'bean名称', '方法名称', '参数', 'cron表达式', '备注', '状态'],
        props: ['jobId', 'beanName', 'methodName', 'params', 'cronExpression', 'remark', 'status'],
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
            placeholder: 'bean名称',
            searchName: 'beanName'
        },
        newComponent: [{
                type: 'text',
                label: 'bean名称',
                name: 'beanName',
                placeholder: 'bean名称',
                rules: [{
                    required: true,
                    message: '请输入bean名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '方法名称',
                name: 'methodName',
                placeholder: '方法名称',
                rules: [{
                    required: true,
                    message: '请输入方法名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '参数',
                name: 'params',
                placeholder: '参数',
                inputType: 'text'
            },
            {
                type: 'text',
                label: 'cron表达式',
                name: 'cronExpression',
                placeholder: 'cron表达式',
                inputType: 'text',
                rules: [{
                    required: true,
                    message: '请输入cron表达式!'
                },{
                    validator: validate.cron
                }],
            },
            {
                type: 'text',
                label: '备注',
                name: 'remark',
                placeholder: '备注',
                inputType: 'text'
            },
        ],
        editComponent: [{
                type: 'text',
                label: 'bean名称',
                name: 'beanName',
                placeholder: 'bean名称',
                rules: [{
                    required: true,
                    message: '请输入bean名称'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '方法名称',
                name: 'methodName',
                placeholder: '方法名称',
                rules: [{
                    required: true,
                    message: '请输入方法名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '参数',
                name: 'params',
                placeholder: '参数',
                inputType: 'text'
            },
            {
                type: 'text',
                label: 'cron表达式',
                name: 'cronExpression',
                placeholder: 'cron表达式',
                inputType: 'text',
                rules: [{
                    required: true,
                    message: '请输入cron表达式!'
                }],
            },
            {
                type: 'text',
                label: '备注',
                name: 'remark',
                placeholder: '备注',
                inputType: 'text'
            },
        ],
    }],
    logList: [{
        key: 'log List',
        tab: '日志列表',
        tag: 'scheduleLog',
        theads: ['日志Id', '任务Id', 'bean名称', '错误', '方法名称', '执行时长(毫秒)', '参数', '状态', '创建时间'],
        props: ['logId', 'jobId', 'beanName', 'error', 'methodName', 'times', 'params', 'status', 'createTime'],
        searchInput: {
            placeholder: '任务Id',
            searchName: 'jobId'
        },
        typeComponent: [{
            components: newBtn
        }, {
            components: editBtn
        }],
        newComponent: [{
                type: 'text',
                label: '日志Id',
                name: 'logId',
                placeholder: '日志Id',
                rules: [{
                    required: true,
                    message: '请输入日志Id!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '任务Id',
                name: 'jobId',
                placeholder: '任务Id',
                rules: [{
                    required: true,
                    message: '请输入任务Id!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '错误',
                name: 'error',
                placeholder: '错误',
                inputType: 'text'
            },
            {
                type: 'text',
                label: '方法名称',
                name: 'methodName',
                placeholder: '方法名称',
                inputType: 'text'
            },
            {
                type: 'text',
                label: '执行时长(毫秒)',
                name: 'times',
                placeholder: '执行时长(毫秒)',
                inputType: 'text'
            },
            {
                type: 'text',
                label: '参数',
                name: 'params',
                placeholder: '参数',
                inputType: 'text'
            },
            {
                type: 'text',
                label: '状态',
                name: 'status',
                placeholder: '状态',
                inputType: 'text'
            },
        ],
        editComponent: [{
                type: 'text',
                label: '日志Id',
                name: 'logId',
                placeholder: '日志Id',
                rules: [{
                    required: true,
                    message: '请输入日志Id!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '任务Id',
                name: 'jobId',
                placeholder: '任务Id',
                rules: [{
                    required: true,
                    message: '请输入任务Id!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '错误',
                name: 'error',
                placeholder: '错误',
                inputType: 'text'
            },
            {
                type: 'text',
                label: '方法名称',
                name: 'methodName',
                placeholder: '方法名称',
                inputType: 'text'
            },
            {
                type: 'text',
                label: '执行时长(毫秒)',
                name: 'times',
                placeholder: '执行时长(毫秒)',
                inputType: 'text'
            },
            {
                type: 'text',
                label: '参数',
                name: 'params',
                placeholder: '参数',
                inputType: 'text'
            },
            {
                type: 'text',
                label: '状态',
                name: 'status',
                placeholder: '状态',
                inputType: 'text'
            },
        ],
    }],
    paramsManage: [{
        key: 'paramsManage',
        tab: '参数管理',
        tag: 'config',
        theads: ['ID', '参数名', '参数值', '备注'],
        props: ['id', 'key', 'value', 'remark'],
        typeComponent: [{
            components: newBtn
        }, {
            components: editBtn
        }, {
            components: deleteBtn
        }],
        searchInput: {
            placeholder: '参数名',
            searchName: 'key'
        },
        newComponent: [{
                type: 'text',
                label: '参数名',
                name: 'key',
                placeholder: '参数名',
                inputType: 'text'
            },
            {
                type: 'text',
                label: '参数值',
                name: 'value',
                placeholder: '参数值',
                inputType: 'text'
            },
            {
                type: 'text',
                label: '备注',
                name: 'remark',
                placeholder: '备注',
                inputType: 'text'
            }
        ],
        editComponent: [{
                type: 'text',
                label: '参数名',
                name: 'key',
                placeholder: '参数名',
                inputType: 'text'
            },
            {
                type: 'text',
                label: '参数值',
                name: 'value',
                placeholder: '参数值',
                inputType: 'text'
            },
            {
                type: 'text',
                label: '备注',
                name: 'remark',
                placeholder: '备注',
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
            placeholder: '参数名',
            searchName: 'name'
        },
    }],
    dictionaryManage: [{
        key: 'dictionaryManage',
        tab: '字典管理',
        tag: 'dict',
        theads: ['字典Id', '字典名称', '字典类型', '字典码', '字典值', '排序', '备注'],
        props: ['id', 'name', 'type', 'code', 'value', 'orderNum', 'remark'],
        typeComponent: [{
            components: newBtn
        }, {
            components: editBtn
        }, {
            components: deleteBtn
        }],
        searchInput: {
            placeholder: '字典名称',
            searchName: 'name'
        },
        newComponent: [{
                type: 'text',
                label: '字典名称',
                name: 'name',
                placeholder: '字典名称',
                rules: [{
                    required: true,
                    message: '请输入字典名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '字典类型',
                name: 'type',
                placeholder: '字典类型',
                rules: [{
                    required: true,
                    message: '请输入字典类型!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '字典码',
                name: 'code',
                placeholder: '字典码',
                rules: [{
                    required: true,
                    message: '请输入字典码!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '字典值',
                name: 'value',
                placeholder: '字典值',
                rules: [{
                    required: true,
                    message: '请输入字典值!'
                }],
                inputType: 'text'
            },
            {
                type: 'num',
                label: '排序',
                name: 'orderNum',
                placeholder: '排序',
            },
            {
                type: 'text',
                label: '备注',
                name: 'remark',
                placeholder: '备注',
                inputType: 'text'
            }
        ],
        editComponent: [{
                type: 'text',
                label: '字典名称',
                name: 'name',
                placeholder: '字典名称',
                rules: [{
                    required: true,
                    message: '请输入字典名称!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '字典类型',
                name: 'type',
                placeholder: '字典类型',
                rules: [{
                    required: true,
                    message: '请输入字典类型!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '字典码',
                name: 'code',
                placeholder: '字典码',
                rules: [{
                    required: true,
                    message: '请输入字典码!'
                }],
                inputType: 'text'
            },
            {
                type: 'text',
                label: '字典值',
                name: 'value',
                placeholder: '字典值',
                rules: [{
                    required: true,
                    message: '请输入字典值!'
                }],
                inputType: 'text'
            },
            {
                type: 'num',
                label: '排序',
                name: 'orderNum',
                placeholder: '排序',
            },
            {
                type: 'text',
                label: '备注',
                name: 'remark',
                placeholder: '备注',
                inputType: 'text'
            }
        ],
    }],
    SystemLog: [{
        key: 'SystemLog',
        tab: '系统日志',
        tag: 'log',
        theads: ['id', '用户名', '用户操作', '请求方法', '请求参数', '执行时长(毫秒)', 'IP地址', '创建时间'],
        props: ['id', 'username', 'operation', 'method', 'params', 'time', 'ip', 'createDate'],
        searchInput: {
            placeholder: '用户名、用户操作',
            searchName: 'key'
        },
    }],
}