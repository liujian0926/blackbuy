<template>
  <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="/index.html">首页</a> &gt;
                <a href="/goods.html">购物商城</a> &gt;
                <a href="/goods/42/1.html">商品详情</a>
            </div>
        </div>
        <div class="section">
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <div class="left-925">
                        <div class="goods-box clearfix">


                            <div class="pic-box">
                            
                            <el-carousel>
                             <el-carousel-item v-for="(item,index) in imglist" :key="index">
                               <img :src="item.thumb_path" alt="">
                             </el-carousel-item>
                            </el-carousel>
                            </div>


                            <div class="goods-spec">
                                <h1>{{goodsinfo.title}}</h1>
                                <p class="subtitle">{{goodsinfo.sub_title}}</p>
                                <div class="spec-box">
                                    <dl>
                                        <dt>货号</dt>
                                        <dd id="commodityGoodsNo">{{goodsinfo.goods_no}}</dd>
                                    </dl>
                                    <dl>
                                        <dt>市场价</dt>
                                        <dd>
                                            <s id="commodityMarketPrice">¥{{goodsinfo.market_price}}</s>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>销售价</dt>
                                        <dd>
                                            <em id="commoditySellPrice" class="price">¥{{goodsinfo.sell_price}}</em>
                                        </dd>
                                    </dl>
                                </div>
                                <div class="spec-box">
                                    <dl>
                                        <dt>购买数量</dt>
                                        <dd>
                                            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
                                            <span class="stock-txt">
                                                库存
                                                <em id="commodityStockNum">{{goodsinfo.stock_quantity}}</em>件
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <div id="buyButton" class="btn-buy">
                                                <button onclick="cartAdd(this,'/',1,'/shopping.html');" class="buy">立即购买</button>
                                                <button onclick="cartAdd(this,'/',0,'/cart.html');" class="add">加入购物车</button>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div id="goodsTabs" class="goods-tab bg-wrap">
                            <div id="tabHead" class="tab-head" style="position: static; top: 517px; width: 925px;">
                                <ul>
                                    <li>
                                        <a href="javascript:;" @click="index=1" :class="{selected:index==1}">商品介绍</a>
                                    </li>
                                    <li>
                                        <a @click="index=2" :class="{selected:index==2}" href="javascript:;">商品评论</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content entry" v-show = "index==1" v-html="goodsinfo.content" ></div>
                            <div class="tab-content" v-show = "index==2" >
                                <div class="comment-box">
                                    <div id="commentForm" name="commentForm" class="form-box">
                                        <div class="avatar-box">
                                            <i class="iconfont icon-user-full"></i>
                                        </div>
                                        <div class="conn-box">
                                            <div class="editor">
                                                <textarea
                                                id="txtContent"
                                                name="txtContent" sucmsg=" " 
                                                datatype="*10-1000" 
                                                nullmsg="请填写评论内容！"
                                                v-model = "comment"
                                                ></textarea>
                                                <span class="Validform_checktip"></span>
                                            </div>
                                            <div class="subcon">
                                                <input 
                                                id="btnSubmit" 
                                                name="submit" 
                                                type="submit" 
                                                value="提交评论"
                                                class="submit"
                                                @click.trim = "postComment"
                                                 >
                                                <span class="Validform_checktip"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <ul id="commentList" class="list-box">
                                        <p style="margin: 5px 0px 15px 69px; line-height: 42px; text-align: center; border: 1px solid rgb(247, 247, 247);">暂无评论，快来抢沙发吧！</p>
                                        <li v-for="item in commentList">
                                            <div class="avatar-box">
                                                <i class="iconfont icon-user-full"></i>
                                            </div>
                                            <div class="inner-box">
                                                <div class="info">
                                                    <span>{{item.user_name}}</span>
                                                    <span>{{item.add_time | formatTime('YYY-MM-DDTHH:mm:ss')}}</span>
                                                </div>
                                                <p>{{item.content}}</p>
                                            </div>
                                        </li>
                                       
                                    </ul>
                                    <div class="page-box" style="margin: 5px 0px 0px 62px;">
                                       <el-pagination
                                         @size-change="handleSizeChange"
                                         @current-change="handleCurrentChange"
                                         :current-page="pageIndex"
                                         :page-sizes="[5,10,15,20]"
                                         :page-size="pageSize"
                                         layout="total, sizes, prev, pager, next, jumper"
                                         :total="totalcount">
                                       </el-pagination>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="left-220">
                        <div class="bg-wrap nobg">
                            <div class="sidebar-box">
                                <h4>推荐商品</h4>
                                <ul class="side-img-list">

                                    <li v-for = "item in hotgoodslist">
                                        <div class="img-box">
                                            <router-link :to="'/detail/'+item.id">
                                            
                                                <img :src="item.img_url">
                                           
                                            </router-link>
                                        </div>
                                        <div class="txt-box">
                                            
                                             <router-link :to="'/detail/'+item.id">
                                            {{item.title}}
                                            </router-link>
                                          
                                            <span>{{item.add_time | formatTime('YY年MM月DD日')}}</span>
                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 导入axios
// import axios from 'axios';
export default {
    data() {
        return {
            // tab的索引
            index:1,
            // 商品详情信息
            goodsinfo:{},
            // 热门商品
            hotgoodslist:[],
            // 计数器
            num1:1,
            // 轮播图数组
            imglist:[],
            // 评论内容
            comment:'',
            // 页码
            pageIndex:1,
            // 页容量
            pageSize:10,
            //评论数组
            commentList:[],
            // 总评论
            totalcount: 0 
        }
    },
    methods: {
        getDetail(){
            this.$axios.get(`/site/goods/getgoodsinfo/${this.$route.params.id}`).then(res=>{
            console.log(res)
            this.goodsinfo = res.data.message.goodsinfo;
            this.hotgoodslist = res.data.message.hotgoodslist;
            this.imglist = res.data.message.imglist
            })
        },
        
        // 饿了么计数器
        handleChange(value) {
        console.log(value)
      },
    //   提交评论
      postComment(){
        //非空判断
        if(this.comment===''){
            this.$message.error('请输入评论内容')
        }
        // 有内容输入,发送请求添加到数据库
        this.$axios.post(`site/validate/comment/post/goods/${this.$route.params.id}`,{
            commenttxt:this.comment
        }).then(res=>{
            console.log(res)
            if(res.data.status==0){
                this.$message.error(res.data.message)
            }
            // 清空文本
            this.comment=''
            // 提交成功获取评论到页面上,默认第一页
            this.getComment();
            pageIndex=1;

        })
      },
    //获取评论,渲染页面
    getComment(){
        this.$axios.get(`site/comment/getbypage/goods/${this.$route.params.id}?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`).then(res=>{
            console.log(res)
            this.commentList = res.data.message
            this.totalcount = res.data.totalcount

        })
    }   
    },
    // 发送请求获取数据
    created() {
        this.getDetail();
        this.getComment();
    },
    // 页容量改变
    handleSizeChange(size){
        this.pageSize = size
        this.getComment()
    },
    // 页码改变
    handleCurrentChange(current){
        this.pageIndex = current
        this.getComment()
    },

    // 侦听器
    watch: {
        // 观察数据的改变
        $route(value,oldValue){
            this.getDetail();
        }
    },
}
</script>

<style>
.pic-box{
    width:395px;
    height:320px;
}
.pic-box .el-carousel{
    width:100%;
    height:100%;
}
.pic-box .el-carousel__container{
    width:100%;
    height:100%;
}
.pic-box .el-carousel__container img {
    display:block;
    width:100%;
    height:100%;
}

</style>