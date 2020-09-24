import colors from "constants/colors";


const brandPrimary = colors.primary;
const brandPrimaryTap = colors.primaryDark;

export  default  {
  // Alipay wallet default theme
  // https://github.com/ant-design/ant-design-mobile/wiki/Design variable table and naming convention

  // 色彩, NOTE: must use `#000000` instead of `#000`
  // https://facebook.github.io/react-native/docs/colors.html
  // 8-digit-hex to 4-digit hex https://css-tricks.com/8-digit-hex-codes/
  // https://www.chromestatus.com/feature/5685348285808640 chrome will support `#RGBA`
  // Letter color
  color_text_base : '#000000' ,                   // basic
  color_text_base_inverse : '#ffffff' ,           // basic _ reverse color
  color_text_secondary : '#a4a9b0' ,           // auxiliary color
  color_text_placeholder : '#bbbbbb' ,            // text box prompt
  color_text_disabled : '#bbbbbb' ,               // invalid
  color_text_caption : '#888888' ,                // auxiliary description
  color_text_paragraph : '#333333' ,              // paragraph
  color_link : brandPrimary ,                  // link

  // Background color
  fill_base : '#ffffff' ,                            // component default background
  fill_body : '#f5f5f9' ,                         // page background
  fill_tap : '#dddddd' ,                             // component default background _ press
  fill_disabled : '#dddddd' ,                        // General invalidation background
  fill_mask : 'rgba(0, 0, 0, .4)' ,               // mask background
  color_icon_base : '#cccccc' ,                      // Background of many small icons, such as some small dots, plus and minus signs
  fill_grey: '#f7f7f7',

  // Transparency
  opacity_disabled : '0.3' ,    // Transparency disabled by components such as switch checkbox radio

  // global/brand color
  brand_primary : brandPrimary ,
  brand_primary_tap: brandPrimaryTap,
  brand_success: '#6abf47',
  brand_warning: '#f4333c',
  brand_error: '#f4333c',
  brand_important : '#ff5b05' ,   // for small red dots
  brand_wait: '#108ee9',

  // border color
  border_color_base: '#dddddd',

  // font size
  // ---
  font_size_icontext: 10,
  font_size_caption_sm: 12,
  font_size_base: 14,
  font_size_subhead: 15,
  font_size_caption: 16,
  font_size_heading: 17,

  // rounded corners
  // ---
  radius_xs: 2,
  radius_sm: 3,
  radius_md: 5,
  radius_lg: 7,

  // border size
  // ---
  border_width_sm: 0.5,
  border_width_md: 1,
  border_width_lg: 2,

  // spacing
  // ---
  // horizontal spacing
  h_spacing_sm: 5,
  h_spacing_md: 8,
  h_spacing_lg: 15,

  // Vertical spacing
  v_spacing_xs: 3,
  v_spacing_sm: 6,
  v_spacing_md: 9,
  v_spacing_lg : 15 ,
  v_spacing_xl: 21,

  // height
  // ---
  line_height_base : 1 ,            // single line height
  line_height_paragraph : 1.5 ,     // multi-line height

  // Icon size
  // ---
  icon_size_xxs: 15,
  icon_size_xs: 18,
  icon_size_sm: 21,
  icon_size_md : 22 ,        // icon on the navigation bar
  icon_size_lg: 36,

  // animation easing
  // ---
  ease_in_out_quint: 'cubic_bezier(0.86, 0, 0.07, 1)',

  // component variable
  // ---

  actionsheet_item_height: 50,
  actionsheet_item_font_size: 18,

  // button
  button_height: 47,
  button_font_size: 18,

  button_height_sm: 23,
  button_font_size_sm: 12,

  primary_button_fill: brandPrimary,
  primary_button_fill_tap: brandPrimaryTap,

  ghost_button_color : brandPrimary ,     // applied to background, text color, border color at the same time
  ghost_button_fill_tap: `${brandPrimary}99`, // alpha 60%  https://codepen.io/chriscoyier/pen/XjbzAW

  warning_button_fill: '#e94f4f',
  warning_button_fill_tap: '#d24747',

  link_button_fill_tap: '#dddddd',
  link_button_font_size: 16,

  // capital
  modal_font_size_heading: 18,
  modal_button_font_size : 18 ,  // Button font size
  modal_button_height : 50 ,  // button height

  // list
  list_title_height: 30,
  list_item_height_sm: 35,
  list_item_height: 44,

  // input
  input_label_width : 17 ,        // InputItem, TextareaItem text length basic value
  input_font_size: 17,
  input_color_icon: '#cccccc',
  input_color_icon_tap: brandPrimary,

  // tabs
  tabs_color: brandPrimary,
  tabs_height: 42,
  tabs_font_size_heading: 15,

  // segmented_control
  segmented_control_color : brandPrimary ,   // applied to background, text color, border color at the same time
  segmented_control_height: 27,
  segmented_control_fill_tap: `${brandPrimary}10`,

  // tab_bar
  tab_bar_fill: '#ebeeef',
  tab_bar_height: 50,

  // toast
  toast_fill: 'rgba(0, 0, 0, .8)',

  // search_bar
  search_bar_fill: '#efeff4',
  search_bar_height: 44,
  search_bar_input_height: 28,
  search_bar_font_size: 15,
  search_color_icon : '#bbbbbb' ,  // background color of input search icon

  // notice_bar
  notice_bar_fill: '#fffada',
  notice_bar_height: 36,

  // switch
  switch_fill: '#4dd865',

  // tag
  tag_height: 25,
  tag_small_height: 15,

  // picker
  option_height : 42 ,             // height of picker header

  toast_zindex: 1999,
  action_sheet_zindex: 1000,
  popup_zindex: 999,
  modal_zindex : 999 ,
} ;