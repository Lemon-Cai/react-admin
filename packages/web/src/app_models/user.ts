export interface Permission {
  code: string
  name: string
  description?: string
}

export interface UserInfo {
  /**
   * @description 登录人id
   */
  userId: string;
  /**
   * @description 登录人名称
   */
  username: string;
  /**
   * @description 部门id
   */
  deptId?: string;
  /**
   * @description 部门名称
   */
  deptName?: string;
  /**
   * @description 角色
   */
  role?: string;
  /**
   * @description 用户头像
   */
  userFace?: string
  displayName?: string
  password?: string
  token: string
  permission: Permission[]
}
